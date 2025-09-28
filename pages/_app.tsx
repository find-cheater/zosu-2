@@ .. @@
 import type { AppProps } from 'next/app'
+import Head from 'next/head'
 import '@/styles/globals.css'
 
 export default function App({ Component, pageProps }: AppProps) {
   return (
-    <Component {...pageProps} />
+    <>
+      <Head>
+        <title>VOSU - AI Video Creation Platform</title>
+        <meta name="description" content="Create stunning AI videos in seconds. Turn your ideas into professional videos with no cameras, no crews—just AI bringing your vision to life." />
+        <meta name="viewport" content="width=device-width, initial-scale=1" />
+        <link rel="icon" href="/favicon.ico" />
+      </Head>
+      <Component {...pageProps} />
+    </>
   )
 }