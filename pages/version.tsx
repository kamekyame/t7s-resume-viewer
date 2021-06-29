import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";

export default function () {
  return (
    <div>
      <h1>バージョン履歴</h1>
      <div>
        <h2>2021/6/29</h2>
        <ul>
          <li>t7s 履歴書ビューアを公開しました。</li>
          <li>ABOUTページ、VERSIONページを追加しました。</li>
        </ul>
      </div>
    </div>
  );
}
