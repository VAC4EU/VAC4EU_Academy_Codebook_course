---
weight: 1
name_excel: "D4_persontime.xlsx"
description: "Persontime and number of cases  calculated by grouping for a specific strata of ageband and sex​"
slug: "D4_persontime"
datetime: 1.7587851e+09
title: D4_persontime
author: ''
date: '2025-09-25'
categories: []
tags: []
archetype: codebook
output: html_document
---

<script src="/rmarkdown-libs/core-js/shim.min.js"></script>
<script src="/rmarkdown-libs/react/react.min.js"></script>
<script src="/rmarkdown-libs/react/react-dom.min.js"></script>
<script src="/rmarkdown-libs/reactwidget/react-tools.js"></script>
<script src="/rmarkdown-libs/htmlwidgets/htmlwidgets.js"></script>
<link href="/rmarkdown-libs/reactable/reactable.css" rel="stylesheet" />
<script src="/rmarkdown-libs/reactable-binding/reactable.js"></script>
<div class="tab">
<button class="tablinks" onclick="openCity(event, &#39;Metadata&#39;)" id="defaultOpen">Metadata</button>
<button class="tablinks" onclick="openCity(event, &#39;Data Model&#39;)">Data Model</button>
<button class="tablinks" onclick="openCity(event, &#39;Parameters&#39;)">Parameters</button>
<button class="tablinks" onclick="openCity(event, &#39;Example&#39;)">Example</button>
</div>
<div id="Metadata" class="tabcontent">
<div id="htmlwidget-1" class="reactable html-widget" style="width:auto;height:600px;"></div>
<script type="application/json" data-for="htmlwidget-1">{"x":{"tag":{"name":"Reactable","attribs":{"data":{"medatata_name":["Name of the dataset","Content of the dataset","Unit of observation","Dataset where the list of UoOs is fully listed and with 1 record per UoO","How many observations per UoO","NxUoO​","Variables capturing the UoO","Primary key","Parameters",null,null,null,null,null,null,null,null,null,null,null],"metadata_content":["D4_persontime","Persontime and number of cases  calculated by grouping for a specific strata of ageband and sex​","A combination of ageband and sex","All agebands x all genders","As many as the methods of the analysis (in this case, 2)","2","ageband, sex","ageband, sex, method",null,null,null,null,null,null,null,null,null,null,null,null]},"columns":[{"id":"medatata_name","name":"medatata_name","type":"character"},{"id":"metadata_content","name":"metadata_content","type":"character"}],"sortable":false,"searchable":true,"pagination":false,"highlight":true,"bordered":true,"striped":true,"style":{"maxWidth":1800},"height":"600px","dataKey":"b974494e178b20a61a583642b67eeae1"},"children":[]},"class":"reactR_markup"},"evals":[],"jsHooks":[]}</script>
</div>
<div id="Data Model" class="tabcontent">
<div id="htmlwidget-2" class="reactable html-widget" style="width:auto;height:600px;"></div>
<script type="application/json" data-for="htmlwidget-2">{"x":{"tag":{"name":"Reactable","attribs":{"data":{"VarName":["ageband","sex","method","pt","cases",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Description":["unique person identifier","sex of the person","methods to be used in calculating the cohort entrance","persontime in days","number of cases",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Format":["character","date","integer","integer","integer",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Vocabulary":["from cdm persons",null,"1 = method A\r\n2 = method B",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Parameters":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Notes and examples":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Source tables and variables":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Retrieved":["yes","yes","no","no","no",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Calculated":["no","no","yes","yes","yes",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Algorithm_id":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Rule":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},"columns":[{"id":"VarName","name":"VarName","type":"character"},{"id":"Description","name":"Description","type":"character"},{"id":"Format","name":"Format","type":"character"},{"id":"Vocabulary","name":"Vocabulary","type":"character"},{"id":"Parameters","name":"Parameters","type":"logical"},{"id":"Notes and examples","name":"Notes and examples","type":"logical"},{"id":"Source tables and variables","name":"Source tables and variables","type":"logical"},{"id":"Retrieved","name":"Retrieved","type":"character"},{"id":"Calculated","name":"Calculated","type":"character"},{"id":"Algorithm_id","name":"Algorithm_id","type":"logical"},{"id":"Rule","name":"Rule","type":"logical"}],"sortable":false,"searchable":true,"pagination":false,"highlight":true,"bordered":true,"striped":true,"style":{"maxWidth":1800},"height":"600px","dataKey":"d6468ecc124ff07098ce8c49599266a9"},"children":[]},"class":"reactR_markup"},"evals":[],"jsHooks":[]}</script>
</div>
<div id="Parameters" class="tabcontent">
<div id="htmlwidget-3" class="reactable html-widget" style="width:auto;height:600px;"></div>
<script type="application/json" data-for="htmlwidget-3">{"x":{"tag":{"name":"Reactable","attribs":{"data":{"parameter in the variable name":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"values":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"name of macro":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},"columns":[{"id":"parameter in the variable name","name":"parameter in the variable name","type":"logical"},{"id":"values","name":"values","type":"logical"},{"id":"name of macro","name":"name of macro","type":"logical"}],"sortable":false,"searchable":true,"pagination":false,"highlight":true,"bordered":true,"striped":true,"style":{"maxWidth":1800},"height":"600px","dataKey":"f545894952d01490ab535e7af1d88bc2"},"children":[]},"class":"reactR_markup"},"evals":[],"jsHooks":[]}</script>
</div>
<div id="Example" class="tabcontent">
<div id="htmlwidget-4" class="reactable html-widget" style="width:auto;height:600px;"></div>
<script type="application/json" data-for="htmlwidget-4">{"x":{"tag":{"name":"Reactable","attribs":{"data":{"Ageband​":["[0-18)​","[18-35)​","[35-65)​","[65-80)​","80+​","[0-18)​","[18-35)​","[35-65)​","[65-80)​","80+​",null,null,null,null,null,null,null,null,null,null],"sex​":["F​","F​","F​","F​","F​","F​","F​","F​","F​","F​",null,null,null,null,null,null,null,null,null,null],"Method​":["1​","1​","1​","1​","1​","2​","2​","2​","2​","2​",null,null,null,null,null,null,null,null,null,null],"pt​":["123​","646​","97​","342​","7564​","123​","646​","97​","342​","7600​",null,null,null,null,null,null,null,null,null,null],"cases​":["10​","9​","8​","5​","0​","7​","8​","6​","9​","7​",null,null,null,null,null,null,null,null,null,null]},"columns":[{"id":"Ageband​","name":"Ageband​","type":"character"},{"id":"sex​","name":"sex​","type":"character"},{"id":"Method​","name":"Method​","type":"character"},{"id":"pt​","name":"pt​","type":"character"},{"id":"cases​","name":"cases​","type":"character"}],"sortable":false,"searchable":true,"pagination":false,"highlight":true,"bordered":true,"striped":true,"style":{"maxWidth":1800},"height":"600px","dataKey":"a7fe7fa31ce88722eca460aebbc0905b"},"children":[]},"class":"reactR_markup"},"evals":[],"jsHooks":[]}</script>
</div>
