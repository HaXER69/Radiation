<link rel="stylesheet" href="/assets/css/media.css">
  <script src="node/node.index.js"></script>
  <script src="build-v1.0/assets/index.js/"></script>
  <!-- begin uvScript -->
  <script src="/uv/uv.bundle.js">// bundled</script>
  <script src="/uv/uv.prefrence.js">// pref</script>
  <script src="/uv/uv.handler.js">// handle</script>
  <script src="/uv/uv.config.js">// .config</script>
  <!-- serviceWorker js --><script src="uv/uv.sw.js">
  </script><script src="av/av.pre.js"></script>
          <script src="av/av.index.js"></script>
  <!-- end uvScript >>--> <?php
  require'webphp/proxy.php';
  require'express.php'; ?>
    <html><head>
    <title>Radiation | App</title>
    <script>
    // begin def
  const crypto = require("crypto"); // crypto NpmJS
  function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));}
        function keyer(a) {
    const k1 = crypto.createDiffieHellman(2048);
    const um1 = k1.generateKeys();
    const k2 = crypto.createDiffieHellman(k1.getPrime(), k1.getGenerator());
    const um2 = k2.generateKeys();
      // set Fin
    const oneSecret = k1.computeSecret(k1.getPublicKey());
    const twoSecret = k2.computeSecret(k2.getPublicKey());
        let stringxx = "k1:" + oneSecret + "k2:" + twoSecret;
      console.log("processKey:"+oneSecret);
      document.getElementByID(a).innerHTML = 'redirecting to session' + oneSecret;
      document.title = 'redirecting...';
      return stringxx;
        }; function integTTL() {document.title = keyer();};
      sleep(2000).then(() => {keyer('display');});
        </script>
        <!--wd3hrbh4bh4rhb3br3hb4rh3br3hb4hr3h4rh34br3h4br3h43rb34rr3l4kr34rnj34r34jrn3j4n-->
        <?php 
        $URL = $_POST["search"];
        $METHOD = $GET["proxyMETHOD"];
        $SERVER = array( 
          $_POST["_Loc"]; 
          $_POST["Code-US"];
          $_POST["Code-EU"];
          $_POST["Code-AF"];
          $_POST["Code-AS"];
        );?> 
    </head>
    <style>
      .display {
        font-family:Arial, Helvetica, sans-serif;
        font-size:32px;
      }
    </style>
    <body>
      <div id="display" class="display">
        getting "<?php echo($METHOD)?>" session
    <br>
        please wait...
      </div>
    </body>
    </html>