const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const fs = require('fs');
const cors = require('cors');


// Enable CORS for all routes
app.use(cors());
const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey: ''
  });



app.get('/', (req, res) => {
    const bucketName = 'cloudproject2023';
    const key = 'my-image.jpg';
    const fileContent = fs.readFileSync('./1.png');
    const params = {
        Bucket: bucketName,
        Key: key,
        Body: fileContent,
        ACL: 'public-read',
        ContentType: 'image/jpeg' // Optional: Set the content type of the object
      };
      // Upload the image file to the S3 bucke
      s3.upload(params, (err, data) => {
        if (err) {
          console.log('Error uploading image: ', err);
        } else {
          console.log('Image uploaded successfully. Object URL: ', data.Location);
          res.send(data.Location)
        }
      });
        
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
})