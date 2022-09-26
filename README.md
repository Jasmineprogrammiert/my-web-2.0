### Deployment

https://jasminezeng.com

### VS Code
cd to client, runs `yarn start` && ... server, runs `nodemon run`. \
Frontend and backend run at http://localhost:1208 and http://localhost:8000, respectively.

The page will reload when you make changes. \
You may also see any lint errors in the console.

### Update

Run `yarn build` to build the app for production to the `build` folder. \
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes. \

Then Go to AWS, update S3 bucket and invalidate CloudFront cache.
