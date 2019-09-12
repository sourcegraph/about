---
title: "Strange Loop 2019 - Computer Vision and NLP for Multi-Task Fashion Modeling"
description: "Shoprunner aggregates millions of products from 140 retailers which represent thousands of brands. In order to make these products findable and searchable by users it is important for Shoprunner to be able to standardize the attributes (style, color, pattern etc) of these millions of products. Even after defining what attributes to model, choosing the best way to predict attributes is difficult because every product can be represented in a variety of forms such as images, product description, title,and brand name. These different data representations each have their strengths and weaknesses. Images encode information such as color and pattern well while other attributes related to length and cut may be well captured in text descriptions. This session will go through the multi-task learning ensemble that the Data Science team at Shoprunner has built using both custom multi-task CNNs for images and fine-tuned Bert model for text classification in Pytorch for attribute modeling."
author: Blogy McBlogerson
authorUrl: https://heresblogy.com/
publishDate: 2019-09-14T00:00-13:30
tags: [
  strange-loop
]
slug: strange-loop-2019-computer-vision-and-nlp-for-multi-task-fashion-modeling
heroImage: /blog/strange-loop-thumbnail-square-v2.jpg
published: false
---

<div class="container p-0 liveblog-presenters">
  <div class="row m-0">
      <p class=" mr-12 m-0">
        <span class="liveblog-presenters__name">Michael Sugimura</span>
        <a href="https://twitter.com/sugichan014" target="_blank" title="Twitter"><i class="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/sugi-chan" target="_blank" title="GitHub"><i class="fa fa-github pr-2"></i></a>
        <a href="https://medium.com/@michaelsugimura" target="_blank" title="Speaker's site"><i class="fa fa-globe pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

Shoprunner aggregates millions of products from 140 retailers which represent thousands of brands. In order to make these products findable and searchable by users it is important for Shoprunner to be able to standardize the attributes (style, color, pattern etc) of these millions of products. Even after defining what attributes to model, choosing the best way to predict attributes is difficult because every product can be represented in a variety of forms such as images, product description, title,and brand name. These different data representations each have their strengths and weaknesses. Images encode information such as color and pattern well while other attributes related to length and cut may be well captured in text descriptions. This session will go through the multi-task learning ensemble that the Data Science team at Shoprunner has built using both custom multi-task CNNs for images and fine-tuned Bert model for text classification in Pytorch for attribute modeling.

---

AWESOME LIVEBLOG CONTENT HERE!

<!-- Note on images
  Images (e.g. my_image.jpg) should be put in the `website/static/blog/strange-loop-2019` directory, with the path to the image in your post being `/blog/strange-loop-2019/my_image.jpg`. If you'd rather host the images somewhere else for ease of use, that's fine too.

  Please also try to keep your images to a reasonable size by:
    - Using JPEG compression, unless image is mostly solid color 
    - JPEG compression set between 60%-80%
    - Resizing the image to be no wider then 750px
    - If PNG, use a tool like ImageOptim (https://imageoptim.com/mac) to optimize the file size

  I suggest re-sizing and compressing all the images in one batch as a last step.
-->  
