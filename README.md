### Deployment

https://jasminezeng.com

### VS Code
cd to project folder, run `yarn install` in the Terminal.
Then runs `yarn start`, http://localhost:1208 will be launched.

The page will reload when you make changes.
You may also see any lint errors in the console.

### Update

Run `yarn build` to build the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

Then Go to AWS, update S3 bucket and invalidate CloudFront cache.
