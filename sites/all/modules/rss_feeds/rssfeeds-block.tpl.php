<div id="rssfeeds-pager">
	<?php foreach ($urls as $url): ?>
		<span>
			<?php echo l($url->url, "http://$url->url", array('attributes' => array('target' => '_blank'))); ?>
        </span>
	<?php endforeach; ?>
</div> 