## 【問題１】答え合わせ

### ニフティクラウドmobile backend上での確認
![mBaaS](/readme-img/mBaaS.png)

* 保存されたデータを確認しましょう
 * 「データストア」をクリックすると、「`GameScore`」クラスにデータが登録されていることが確認できます。

![ans1-1](/readme-img/ans1-1.png)

* 上図はスコアが35連打で名前を「あいうえお」とした場合の例です。

### コードの答え合わせ

![Monaca](/readme-img/Monaca.png)

* 模範解答は以下です

```js
// **********【問題１】名前とスコアを保存しよう！**********
// 保存先クラスを作成
var GameScore = ncmb.DataStore("GameScore");
// クラスインスタンスを生成
var gameScore = new GameScore();
// 値を設定
gameScore.set("name", name);
gameScore.set("score", score);
// 保存を実施
gameScore.save()
         .then(function (){
             // 保存に成功した場合の処理
             console.log("保存に成功しました。");
         })
         .catch(function (error){
             // 保存に失敗した場合の処理
             console.log("保存に失敗しました。エラー:" + error); 
         });
// **************************************************
```
