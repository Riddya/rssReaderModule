<br><br>
<?php foreach ($items->channel->item as $item): ?>
    <span class = "title"><a href = "<?php echo $item->link;?>"><?php echo $item->title; ?></a></span><br><br>
    <?php echo $item->description; ?><br><br><?php echo $item->pubDate; ?><hr><br><br>
<?php endforeach; ?>