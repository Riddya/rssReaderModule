<div id = "rssfeeds-pager">
    <?php

    $curpath = "/".request_path();
    //echo $curpath; exit;

    foreach($urls as $num => $url):
        ?>
        <span>
            <a target="_blank" href="http://<?php echo $url->url; ?>"><?php echo $url->url; ?></a><br>
            <?php //echo (($num+1)%20 == 0)? "<br />" : ""; ?>
        </span>
        <?php
    endforeach;
    ?>
</div> 