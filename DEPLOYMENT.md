# Upload to AsuraHosting shared Node.js hosting

This is a Next.js application with a server API, so it needs hosting that provides a **Node.js Application** feature (Node.js 20.9 or later). Do not upload it directly to `public_html` as a normal HTML website.

## Recommended: use the prebuilt upload package

Use `lucid-global-invest-prebuilt-deploy.zip`. It already contains the production `.next` folder, so the server does **not** need to build the application. This avoids the shared-hosting memory-limit error.

1. In cPanel, open **Setup Node.js App** and create an application with Node.js 20+.
2. Use an application root outside `public_html`, for example `lucid-global-invest`.
3. Stop the current Node.js application.
4. Upload and extract `lucid-global-invest-prebuilt-deploy.zip` into that application root, replacing the old application files.
5. Set the startup file to `server.js`.
6. Open the cPanel terminal, change to the application root, then run this command once:

   ```bash
   npm ci --omit=dev
   ```

7. Click **Restart** for the Node.js application. Do **not** run `npm run build` on the hosting server.

The app uses the `PORT` supplied by the host automatically. AsuraHosting advertises a Node.js launcher with selectable Node versions and custom-package installation, so this deployment approach fits its shared Node.js plans. [AsuraHosting Node.js hosting](https://www.asurahosting.com/nodejs-hosting)

For future changes, build the project locally first, upload the new prebuilt ZIP, then restart the application.

## Important

- The ZIP intentionally does not contain `node_modules`; `npm ci --omit=dev` creates the Linux-compatible runtime dependencies. It **does** contain the completed `.next` production output.
- The contact endpoint (`/api/contact`) currently only writes submitted data to the server log. It does not send email or save enquiries in a database.
- If the hosting plan has no **Setup Node.js App** feature, it cannot run this version of the site. Ask the host to enable Node.js hosting or move to a Node-compatible plan.
