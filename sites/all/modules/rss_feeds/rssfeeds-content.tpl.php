<br><br>
<?php foreach ($items->channel->item as $item): ?>
    <span style = "font-size: 15px; text-shadow: 0px 0px 1px black; font-weight: bold;"><a style="text-decoration: underline; color: black;" href = "<?php echo $item->link;?>"><?php echo $item->title; ?></a></span><br><br>
    <?php echo $item->description; ?><br><br><?php echo $item->pubDate; ?><hr><br><br>
<?php endforeach; ?>