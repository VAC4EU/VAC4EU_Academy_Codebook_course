---
weight: 1
name_excel: "D3_all_outcomes.xlsx"
description: "All outcomes recorded for each person in the study population with date, during the study period"
slug: "D3_all_outcomes"
datetime: 1.7587851e+09
title: D3_all_outcomes
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
<script type="application/json" data-for="htmlwidget-1">{"x":{"tag":{"name":"Reactable","attribs":{"data":{"medatata_name":["Name of the dataset","Content of the dataset","Unit of observation","Dataset where the list of UoOs is fully listed and with 1 record per UoO","How many observations per UoO","NxUoO​","Variables capturing the UoO","Primary key","Parameters",null,null,null,null,null,null,null,null,null,null,null],"metadata_content":["D3_all_outcomes","All outcomes recorded for each person in the study population with date, during the study period","A pair composed by a person in the study population and an outcome ​","D3_study_population x list of study outcomes​","As many as the times that person has that outcome during the study period​",">= 0 ​","person_id, outcome","person_id, outcome, date","outcome",null,null,null,null,null,null,null,null,null,null,null]},"columns":[{"id":"medatata_name","name":"medatata_name","type":"character"},{"id":"metadata_content","name":"metadata_content","type":"character"}],"sortable":false,"searchable":true,"pagination":false,"highlight":true,"bordered":true,"striped":true,"style":{"maxWidth":1800},"height":"600px","dataKey":"8e08568a637d5b61234680227791f272"},"children":[]},"class":"reactR_markup"},"evals":[],"jsHooks":[]}</script>
</div>
<div id="Data Model" class="tabcontent">
<div id="htmlwidget-2" class="reactable html-widget" style="width:auto;height:600px;"></div>
<script type="application/json" data-for="htmlwidget-2">{"x":{"tag":{"name":"Reactable","attribs":{"data":{"VarName":["person_id","outcome","date","first diagnostic code",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Description":["unique person identifier","outcome related to the record","when the record occurred","primary diagnosis used",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Format":["character","character","date","character",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Vocabulary":["from cdm persons","from cdm persons",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Parameters":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Notes and examples":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Source tables and variables":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Retrieved":["yes","yes","yes","yes",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Calculated":["no","no","no","no",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Algorithm_id":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Rule":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},"columns":[{"id":"VarName","name":"VarName","type":"character"},{"id":"Description","name":"Description","type":"character"},{"id":"Format","name":"Format","type":"character"},{"id":"Vocabulary","name":"Vocabulary","type":"character"},{"id":"Parameters","name":"Parameters","type":"logical"},{"id":"Notes and examples","name":"Notes and examples","type":"logical"},{"id":"Source tables and variables","name":"Source tables and variables","type":"logical"},{"id":"Retrieved","name":"Retrieved","type":"character"},{"id":"Calculated","name":"Calculated","type":"character"},{"id":"Algorithm_id","name":"Algorithm_id","type":"logical"},{"id":"Rule","name":"Rule","type":"logical"}],"sortable":false,"searchable":true,"pagination":false,"highlight":true,"bordered":true,"striped":true,"style":{"maxWidth":1800},"height":"600px","dataKey":"520257240dd860d6c6ffd4de1f306f95"},"children":[]},"class":"reactR_markup"},"evals":[],"jsHooks":[]}</script>
</div>
<div id="Parameters" class="tabcontent">
<div id="htmlwidget-3" class="reactable html-widget" style="width:auto;height:600px;"></div>
<script type="application/json" data-for="htmlwidget-3">{"x":{"tag":{"name":"Reactable","attribs":{"data":{"parameter in the variable name":["outcome","outcome","outcome",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"values":["Infarction","Stroke","Hypertension",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"name of macro":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},"columns":[{"id":"parameter in the variable name","name":"parameter in the variable name","type":"character"},{"id":"values","name":"values","type":"character"},{"id":"name of macro","name":"name of macro","type":"logical"}],"sortable":false,"searchable":true,"pagination":false,"highlight":true,"bordered":true,"striped":true,"style":{"maxWidth":1800},"height":"600px","dataKey":"1691ff01bfb058f058aa9418c196a7ec"},"children":[]},"class":"reactR_markup"},"evals":[],"jsHooks":[]}</script>
</div>
<div id="Example" class="tabcontent">
<div id="htmlwidget-4" class="reactable html-widget" style="width:auto;height:600px;"></div>
<script type="application/json" data-for="htmlwidget-4">{"x":{"tag":{"name":"Reactable","attribs":{"data":{"person_id​":["P1​","P3​","P3​","P3​","P3​","P4​","P5",null,null,null,null,null,null,null,null,null,null,null,null,null],"Infarction​":[1,0,0,1,0,0,0,"NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],"Stroke​":[0,1,1,0,0,1,0,"NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],"Hypertension​":[0,0,0,0,1,0,1,"NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"],"date​":["2020/01/01​","2021/01/01​","2021/06/12​","2021/01/01​","2021/04/15​","2019/05/04​","2021/01/01​",null,null,null,null,null,null,null,null,null,null,null,null,null],"first diagnostic code​":["I63​","I64​","I64​","I63​","I10","I64","I10",null,null,null,null,null,null,null,null,null,null,null,null,null]},"columns":[{"id":"person_id​","name":"person_id​","type":"character"},{"id":"Infarction​","name":"Infarction​","type":"numeric"},{"id":"Stroke​","name":"Stroke​","type":"numeric"},{"id":"Hypertension​","name":"Hypertension​","type":"numeric"},{"id":"date​","name":"date​","type":"character"},{"id":"first diagnostic code​","name":"first diagnostic code​","type":"character"}],"sortable":false,"searchable":true,"pagination":false,"highlight":true,"bordered":true,"striped":true,"style":{"maxWidth":1800},"height":"600px","dataKey":"38a19d6d8b6d57fe656951e0d9185648"},"children":[]},"class":"reactR_markup"},"evals":[],"jsHooks":[]}</script>
</div>
