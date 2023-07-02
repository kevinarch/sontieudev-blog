import Document, { Html, Head, Main, NextScript } from "next/document"
import { CONFIG } from "site.config"

class MyDocument extends Document {
  render() {
    return (
      <Html lang={CONFIG.lang}>
        <Head>
          <link
            rel="stylesheet"
            as="font"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
          />
          <link
            rel="icon"
            type="image/x-icon"
            href="/favicon-96.ico"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/x-icon"
            href="/favicon-48.ico"
            sizes="48x48"
          />
          <link
            rel="icon"
            type="image/x-icon"
            href="/favicon-32.ico"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/x-icon"
            href="/favicon-16.ico"
            sizes="16x16"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            href="apple-touch-icon.png"
            sizes="180x180"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            href="apple-touch-icon-precomposed.png"
            sizes="120x120"
          />
          <link
            rel="code-icon"
            type="image/png"
            sizes="192x192"
            href="/code.png"
          ></link>
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS 2.0"
            href="/feed"
          ></link>
          {/* theme setting */}
          <meta name="theme-color" content={"#f1f3f5"} />

          {/* google search console */}
          {CONFIG.googleSearchConsole.enable === true && (
            <>
              <meta
                name="google-site-verification"
                content={CONFIG.googleSearchConsole.config.siteVerification}
              />
            </>
          )}
        </Head>
        <body className="bg-slate-100 dark:bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
