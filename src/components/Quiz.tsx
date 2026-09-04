"use client";

import { useMemo, useState } from "react";
import { quizQuestions } from "@/data/quiz";

export default function Quiz() {
  const [answers, setAnswers] = useState<Record<number, number | null>>(
    () => Object.fromEntries(quizQuestions.map((q) => [q.id, null]))
  );
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return quizQuestions.reduce((acc, q) => {
      return acc + (answers[q.id] === q.answerIndex ? 1 : 0);
    }, 0);
  }, [answers]);

  const allAnswered = quizQuestions.every((q) => answers[q.id] !== null);

  function reset() {
    setAnswers(Object.fromEntries(quizQuestions.map((q) => [q.id, null])));
    setSubmitted(false);
  }

  return (
    <div className="space-y-6">
      {quizQuestions.map((q, idx) => {
        const selected = answers[q.id];
        const correct = selected === q.answerIndex;
        return (
          <article
            key={q.id}
            className="rounded-xl border border-gold/20 bg-paper/[0.03] p-5 md:p-6"
          >
            <p className="text-xs tracking-widest text-gold">Q{idx + 1}</p>
            <h3 className="mt-2 font-serif text-lg text-paper">{q.question}</h3>
            <div className="mt-4 grid gap-2">
              {q.choices.map((choice, choiceIndex) => {
                const isSelected = selected === choiceIndex;
                let style =
                  "border-gold/20 bg-ink hover:border-gold/40 text-paper/85";
                if (submitted) {
                  if (choiceIndex === q.answerIndex) {
                    style = "border-emerald-400/60 bg-emerald-500/10 text-emerald-100";
                  } else if (isSelected) {
                    style = "border-rose-400/60 bg-rose-500/10 text-rose-100";
                  } else {
                    style = "border-gold/10 bg-ink/50 text-paper/40";
                  }
                } else if (isSelected) {
                  style = "border-gold/60 bg-gold/10 text-gold";
                }
                return (
                  <button
                    key={choice}
                    type="button"
                    disabled={submitted}
                    onClick={() =>
                      setAnswers((prev) => ({ ...prev, [q.id]: choiceIndex }))
                    }
                    className={`rounded-lg border px-4 py-3 text-left text-sm transition ${style}`}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <p className="mt-3 text-sm leading-relaxed text-paper/65">
                {correct ? "正解。" : "不正解。"}
                {q.explanation}
              </p>
            )}
          </article>
        );
      })}

      <div className="sticky bottom-4 rounded-xl border border-gold/30 bg-ink/95 p-4 shadow-xl backdrop-blur md:flex md:items-center md:justify-between">
        {submitted ? (
          <>
            <p className="font-serif text-lg text-paper">
              結果：
              <span className="text-gold">
                {score} / {quizQuestions.length}
              </span>
              <span className="ml-2 text-sm text-paper/60">
                （{Math.round((score / quizQuestions.length) * 100)}%）
              </span>
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-3 rounded-md border border-gold/40 bg-gold/15 px-4 py-2 text-sm text-gold md:mt-0"
            >
              もう一度挑戦
            </button>
          </>
        ) : (
          <>
            <p className="text-sm text-paper/60">
              回答済み {Object.values(answers).filter((v) => v !== null).length} /{" "}
              {quizQuestions.length}
            </p>
            <button
              type="button"
              disabled={!allAnswered}
              onClick={() => setSubmitted(true)}
              className="mt-3 rounded-md border border-gold/40 bg-gold/20 px-4 py-2 text-sm text-gold disabled:cursor-not-allowed disabled:opacity-40 md:mt-0"
            >
              採点する
            </button>
          </>
        )}
      </div>
    </div>
  );
}
