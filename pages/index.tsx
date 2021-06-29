/// <reference lib="dom"/>
import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";

interface Resume {
  tweetId: string | null;
  userId: string;
  userName: string | null;
  name: string | null;
  date: string | null;
  imageUrl: string | null;
}

function ResumeCard({ resume }: { resume: Resume }) {
  return <Card
    style={{
      margin: "1em", /*, padding: "1em"*/
      width: "300px",
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
    }}
  >
    <CardContent style={{ flexGrow: 1 }}>
      <div>
        {resume.name} 支配人
      </div>
      {resume.userName && <div>
        @{resume.userName}
      </div>}

      {resume.date && <div>
        {new Date(resume.date).toLocaleString("ja-jp")} 更新
      </div>}

      {resume.imageUrl && <div>
        <img style={{ width: "100%" }} src={resume.imageUrl}></img>
      </div>}
    </CardContent>
    {resume.tweetId && <CardActions>
      <Button
        LinkComponent={Link}
        href={"https://twitter.com/_/status/" + resume.tweetId}
      >
        ツイートに跳ぶ
      </Button>
    </CardActions>}
  </Card>;
}

export default function () {
  const [resumes, setResumes] = useState<Resume[]>([]);

  const getData = async () => {
    const res = await fetch(
      "https://kamekyame.mydns.jp/api/t7s-resume/resumes.json",
    );
    if (res.status === 200) {
      const data = await res.json() as Resume[];
      setResumes(data);
      console.log(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>履歴書一覧</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {resumes.reverse().map((resume) => <ResumeCard resume={resume} />)}
      </div>
    </div>
  );
}
