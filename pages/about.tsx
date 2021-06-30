import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";

export default function () {
  return (
    <div>
      <h1>ABOUT</h1>
      <div>
        <h2>t7s 履歴書ビューアとは</h2>
        <p>
          アイドル育成リズム&アドベンチャーゲーム「Tokyo 7th シスターズ」のプレイヤーがTwitterにて投稿している、
          プレイヤースキルなどをまとめた、通称「履歴書」を一覧できるサイトです。
        </p>

        <h2>データ収集元</h2>
        <p>
          Twitterに投稿されたものが対象です。<br />
          対象のツイートは以下の単語を含んでいるツイートのうち、<b>画像が含まれているツイート</b>です。
          <ul>
            <li>「#支配人履歴書」</li>
            <li>「#ナナシス履歴書」</li>
            <li>「履歴書」「支配人」「更新」</li>
            <li>「履歴書」「支配人」「作成」</li>
            <li>「履歴書」「ナナシス」「更新」</li>
            <li>「履歴書」「ナナシス」「作成」</li>
          </ul>
          また、履歴書一覧に表示される画像は、各投稿の1番目の画像になります。プロフィールのスクショ等を一緒に投稿される方は、履歴書が1番目の画像となるように投稿していただくと、正しく表示されます。
        </p>

        <h2>収集期間</h2>
        <p>
          Botとして収集を始めたのは2020年1月4日～になります。<br />
          また、画像も取得し始めたのは2021年6月24日～になります。
          したがって、2020年1月4日～2021年6月23日の期間は支配人名と最終更新日のみのデータとなります。<br />
          なお、Botの収集ロジックは更新していくため、投稿時期に応じて表示されるデータが異なることがあります。
        </p>

        <h2>🍣支配人履歴書Bot</h2>
        <p>
          <a href="https://twitter.com/SuzuTomo2001">
            @SuzuTomo2001
          </a>が運営するBotアカウント
          <a href="https://twitter.com/t7s_resume">
            🍣支配人履歴書Bot（@t7s_resume）
          </a>があります。 ここでは、このサイトで利用するデータを収集する際に、そのツイートをRTするBotとなっています。<br />
          このアカウントの通知をオンにしておくと、各支配人の履歴書の投稿を素早くキャッチすることが出来ます。 是非フォローよろしくお願いします！
          <a
            href="https://twitter.com/t7s_resume?ref_src=twsrc%5Etfw"
            class="twitter-follow-button"
            data-size="large"
            data-lang="ja"
            data-show-count="false"
          >
            Follow @t7s_resume
          </a>
        </p>

        <h2>運営元</h2>
        <p>
          <a href="https://twitter.com/SuzuTomo2001">
            @SuzuTomo2001
          </a>
        </p>
        <h2>お問い合わせ</h2>
        <p>
          t7s 履歴書ビューア・🍣支配人履歴書Botのお問い合わせは、<a
            href="https://twitter.com/SuzuTomo2001"
          >
            すずとものツイッター(@SuzuTomo2001)
          </a>・<a
            href="https://twitter.com/t7s_resume"
          >
            🍣支配人履歴書Bot(@t7s_resume)
          </a>のDM、または<a
            href="mailto:kamekyame+t7s@outlook.com?subject=t7s履歴書ビューアについてのお問い合わせ"
          >
            kamekyame+t7s@outlook.com
          </a>までお願いします。
        </p>
      </div>
    </div>
  );
}
