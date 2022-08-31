/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { WithSession } from "fresh-session";

export const handler: Handlers<{}, WithSession> = {
  GET(req, ctx) {
    const date = new Date(ctx.state.session.get("lastReachedAt"));
    ctx.state.session.set("lastReachedAt", new Date().toString());
    return ctx.render({ date });
  },
};

export default function ({ data }: PageProps<{ date: Date }>) {
  return (
    <div>
      {data.date.toString()}
    </div>
  );
}
