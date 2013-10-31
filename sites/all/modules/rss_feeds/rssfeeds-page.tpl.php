<div id="rssfeeds-pager">
	<?php foreach ($urls as $url): ?>
		<span>
			<?php echo l($url->name, "rss_feeds/{$url->id}/items", array('attributes' => array('target' => '_blank'))); ?><br>
        </span>
	<?php endforeach; ?>
</div><br><br>