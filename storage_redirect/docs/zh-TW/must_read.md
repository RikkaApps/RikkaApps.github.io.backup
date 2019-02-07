# 用語解釋

* 內建儲存：裝置的內建儲存，如 `/storage/emulated/<user id>`（user id 一般是 0，即主使用者）
* （內建儲存）根目錄：如 `/storage/emulated/0` 這個資料夾
* （內建儲存上的）程式專用資料夾：Android 系統設計的程式專用的的資料夾，如 `/storage/emulated/0/Android/data/com.example`（其中 `com.example` 是程式包名）
* 重新導向目標資料夾：每個被重新導向程式都有的選項，是程式專用資料夾中的一個資料夾
* 非重新導向資料夾：每個被重新導向程式都有的選項，是一組資料夾

# 我們的理念

我們希望，程式應該只能在使用者可以感知的情況下，在內建儲存中（除了程式專用資料夾）儲存**對使用者有用的檔案**（比如使用者在聊天程式中儲存收到的圖片，在瀏覽器中下載檔案）。

但很多程式（尤其是大多數來自中國大陸的程式），或是主動或是被動地（使用的某些 SDK 的行為）在內建儲存建立很多資料夾，那些檔案大多為私有格式的資料，**這些檔案應該被存放至程式專用資料夾**。移除那些程式後，那些檔案也不會被刪除。我們認為這樣的行為是不可接受的。

「儲存重新導向」以**在對正常使用體驗造成最小影響的前提下，讓程式行為如我們所希望**為理念設計。

# 從零開始的教學

## 了解開啟重新導向會發生什麼事

在開啟了重新導向後，當程式讀取/寫入內建儲存中的檔案時，實際會讀寫「重新導向目標資料夾」中的檔案，這樣內建儲存就不會受到汙染。但這樣程式就會無法讀取一些需要的檔案（如聊天程式讀取照片），因此引入了「非重新導向資料夾」，程式可以正常讀寫其中的檔案。

你還可以借助「查看重新導向儲存」功能來以被重新導向的程式的視角觀察內建儲存。

另外，這個程式產生的檔案，只要不是在「非重新導向資料夾」資料夾中，都會受到 Android 系統管理。你可以在系統的程式訊息中查看到這些檔案所占的空間，當你清除程式資料或是移除程式時，這些檔案也會被刪除。

## 了解可能影響程式正常使用的情況

會影響程式正常的情況基本都是涉及多個程式交互的情況。

簡單的說，一個檔案路徑，對於開啟和沒有開啟重新導向的程式，或是不同的開啟了重新導向的程式，可能會對應到不同的檔案。
所以如果這些程式如果傳遞檔案路徑而非使用 `Content Provider` 就會產生問題。

可以分為這幾類：

1. 從被重新導向的程式使用其他程式打開檔案（透過「連結」功能變通解決，未來會通過「增強模組」完美解決）
2. 從被重新導向程式分享檔案到其他程式
3. 從其他程式分享檔案到被重新導向的程式
4. 被重新導向程式在希望被重新導向的資料夾建立的檔案會被其他被重新導向程式使用（透過「共享資料夾」功能解決）
5. 被重新導向程式無法在特定資料夾間移動檔案（透過「增強模組」解決）

一些中國大陸地區使用者經常會遇到的實際問題：

* 從 QQ, WeChat 打開收到的檔案 (1)
* 搜狗拼音直接發送圖片到 QQ (4)
* 修改 WeChat 的 Xposed 模組配置失效 (4)
* Bilibili 無法儲存錄製的影片 gif (5)

需要注意的是，這些問題（除了 5）通常只會出現在設計不佳的程式上，所以隨著時間推移，有問題的情況應該會越來越少。

## 判斷是否需要重新導向

如果一個程式會建立令你不快的檔案，且不提供選項可以更改，那就可以判斷為應該開啟重新導向。

如果使用了「增強模組」，可以由檔案監控功能查看程式讀取了什麼位置的檔案，進而推測出檔案是由什麼程式建立。

## 重新導向相關選項

### 非重新導向資料夾

非重新導向資料夾是一個非常重要的選項，它決定被重新導向的程式可以讀取什麼資料夾中的檔案。
如果你發現無法在程式中找到某些檔案，那你需要檢查那些檔案是不是處於非重新導向資料夾資料夾中。
你還可以借助「查看重新導向儲存」功能來確認程式能否讀取那些檔案。

### 重新導向目標資料夾

重新導向目標資料夾是一個不太重要的選項，它決定程式讀寫「非重新導向資料夾」以外的資料夾是實際讀寫的資料夾。如果沒有特殊需求，通常沒有必要更改。

### 連結

連結是一個非常重要的部分。如果你充分理解了開啟重新導向後會發生什麼事，那你一定會猜到，如果被重新導向的程式儲存了有用的檔案到「非重新導向資料夾」以外的資料夾，那其他程式很可能不能找到這些檔案。連結功能就是為了解決這個問題而生。

你可以簡單的把一個連結規則理解成，讓重新導向儲存中的某個資料夾與內建儲存中更外層的某個資料夾中的檔案保持同步，這樣你就可以直接在外層的資料夾中找到那些檔案。

有線上規則的程式通常會包含連結規則，大部分時候直接開啟那些規則就足夠。但需要注意，規則由其他使用者提供，其正確性和時效性可能無法保證。因此我們還是更希望你能夠了解連結功能如何工作，並在線上規則不能滿足自己的需求時能建立甚至是向其他使用者貢獻自己的規則。

另外連結功能的連結檔案行為使用硬連結（你可以自己搜尋什麼是硬連結），來源資料夾和目標資料夾中能看到的相同的檔案只會占用一份儲存空間。

#### 如何建立自己的連結規則

首先強調一點，連結功能應該只用來連結有用的檔案（如聊天軟體中儲存的圖片和檔案等）。部分人會誤認為程式產生的各種檔案都需要連結，如果是這樣的話重新導向就失去了意義。

以 WeChat 為例，WeChat 會將接收到的檔案儲存至 `tencent/MicroMsg/WeChat` (首次打開 WeChat 語言是簡體中文時為 `tencent/MicroMsg/WeiXin`，後面不再額外說明)，如果開啟了重新導向則實際會儲存至 `Android/data/com.tencent.mm/sdcard/tencent/MicroMsg/WeChat`，這樣找到其中的檔案就會非常不方便。因此我們就需要建立連線連結規則，連結這些檔案到更外面的資料夾。

我們可以先簡單建立這樣的連結規則：

* 來源路徑：`tencent/MicroMsg/WeChat`
* 目的路徑：`Download/WeChat`

接著收到的檔案就會被儲存到 `Download/WeChat`，但接著你肯定會發現一些問題。

1. 接收的圖片在相冊程式中找不到

   打開「新增到媒體儲存」選項即可

2. 「用其他程式打開」並不能正常打開檔案
  
   這是因為 WeChat 沒有使用 `Content Provider`。這個問題目前只有一種變通的解決方法，就是「顯示通知」選項。當勾上「顯示通知」後並再次收到檔案時會額外看到一條「已下載 xxx」的通知，點擊這個通知就可以正常打開檔案。
   
   此外你還可以借助其他檔案管理程式或是 Android 的檔案程式直接找到這些檔案。

3. 出現了一些不需要的檔案

   WeChat 還會**可能**把另一些檔案 (com.tencent.xin.emoticon 開頭) 存放到 `tencent/MicroMsg/WeChat`，但我們並不需要在外面讀取這些檔案，因此需要借助「過濾」選項排除這些檔案。

   「過濾」功能使用正則表達式，你可以自己搜尋學習正則表達式。

### 共享資料夾

共享資料夾是 v1.2.0 版本起新增的非常重要部分。簡單的說，共享資料夾可以讓一個被重新導向的程式讀取另一個被重新導向的程式產生的檔案。

### 開啟重新導向之後需要做的事情

#### 轉移和刪除程式以前建立的檔案

因為內建儲存中的檔案無法追蹤建立者，所以你需要自行移動和刪除程式以前建立的檔案們。