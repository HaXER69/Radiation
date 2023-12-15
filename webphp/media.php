<html>
  <head>
    <title>loading media[w_asset.media]...</title>
    <script>
    function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));}
    window.addEventListener('load', function() {
    sleep(2000).then(() => {document.title = 'Radiation Media [V1]';})
    console.log('media.loaded')})</script>
    <iframe src="" style="width:100%; length:100%;" id="display-media">
    </head>
    `<body>
    </body>
</html>