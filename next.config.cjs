@@ .. @@
 /** @type {import('next').NextConfig} */
 const nextConfig = {
   reactStrictMode: true,
-  output: 'export',
-  trailingSlash: true,
-  images: {
-    unoptimized: true,
-  },
+  images: {
+    domains: ['localhost'],
+    formats: ['image/webp', 'image/avif'],
+  },
+  // Uncomment the lines below if you need static export
+  // output: 'export',
+  // trailingSlash: true,
+  // images: {
+  //   unoptimized: true,
+  // },
 }
 
 module.exports = nextConfig