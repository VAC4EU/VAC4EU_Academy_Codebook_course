var relearn_search_index = [
  {
    "content": "\rD3_personscontains the cleaned version of PERSONS, where birth date and death date are reconstituted as dates\nD3_output_spells_categorycontains the spells exited from CreateSpells, i.e., all the continuous spells of observation period of each person, stratified per op_meaning. op_meaning is by default the same for all observation periods, and is set in 05_subpopulations_restricting_meanings for those data sources where the analysis is conducted on subpopulations having different sets of data banks\nD3_cleaned_spells\rD3_conceptsetdatasetthese are multiple datasets, one per each conceptset, which is a value in the list c(conceptsets_exact_matching, conceptsets_children_matching), set in 07_algorithms. Each conceptset dataset is named after the conceptset. Each conceptset is associated to a list of codes. The dataset is obtained by retrieving records from the CDM bearing a code that match one of the codes in the codelist. The matching can be exact (for the conceptsets in conceptsets_exact_matching) or per ascendant (for conceptsets in conceptsets_children_matching) . Records are retrieved from the EVENTS table, but also from other tables which may bear a record, such as PROCEDURES or VACCINES\n ",
    "description": "",
    "tags": [],
    "title": "_index.en",
    "uri": "/step_1/index.html"
  },
  {
    "content": "\rD3_selection_criteria_from_PERSONS_to_source_population\rD4_source_population\rD5_Flowchart_exclusion_criteria\r ",
    "description": "",
    "tags": [],
    "title": "_index.en",
    "uri": "/step_2/index.html"
  },
  {
    "content": "\rD3_all_outcomesAll outcomes recorded for each person in the study population with date, during the study period\nD3_TD_all\rD3_cohort_expunexp\r ",
    "description": "",
    "tags": [],
    "title": "_index.en",
    "uri": "/step_3/index.html"
  },
  {
    "content": "\rD4_persontimePersontime and number of cases calculated by grouping for a specific strata of ageband and sex​\n ",
    "description": "",
    "tags": [],
    "title": "_index.en",
    "uri": "/step_4/index.html"
  },
  {
    "content": "\rD5_persontime_IRs\r ",
    "description": "",
    "tags": [],
    "title": "_index.en",
    "uri": "/step_5/index.html"
  },
  {
    "content": "\rD5_Table_1_Attrition_Table\rD5_Table_2_Cohort_characteristics_expunexp\rD5_Table_3_Covariates_expunexp\rD5_Table_4_IR\r ",
    "description": "",
    "tags": [],
    "title": "_index.en",
    "uri": "/step_6/index.html"
  },
  {
    "content": "\rD5_Masked_Table_1_Attrition_Table\rD5_Masked_Table_2_Cohort_characteristics_expunexp\rD5_Masked_Table_3_Covariates_expunexp\rD5_Masked_Table_4_IR\r ",
    "description": "",
    "tags": [],
    "title": "_index.en",
    "uri": "/step_7/index.html"
  },
  {
    "content": "\rD6_Table_1_Attrition_Table_Masked\rD6_Table_2_Cohort_characteristics_expunexp_Masked\rD6_Table_3_Covariates_expunexp_Masked\rD6_Table_4_IR_Masked\r ",
    "description": "",
    "tags": [],
    "title": "_index.en",
    "uri": "/step_8/index.html"
  },
  {
    "content": "\r\r\r\r\r\rMetadata\rData Model\rParameters\rExample\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"medatata_name\":[\"Name of the dataset\",\"Content of the dataset\",\"Unit of observation\",\"Dataset where the list of UoOs is fully listed and with 1 record per UoO\",\"How many observations per UoO\",\"NxUoO​\",\"Variables capturing the UoO\",\"Primary key\",\"Parameters\",null,null,null,null,null,null,null,null,null,null,null],\"metadata_content\":[\"D3_all_outcomes\",\"All outcomes recorded for each person in the study population with date, during the study period\",\"A pair composed by a person in the study population and an outcome ​\",\"D3_study_population x list of study outcomes​\",\"As many as the times that person has that outcome during the study period​\",\"= 0 ​\",\"person_id, outcome\",\"person_id, outcome, date\",\"outcome\",null,null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"medatata_name\",\"name\":\"medatata_name\",\"type\":\"character\"},{\"id\":\"metadata_content\",\"name\":\"metadata_content\",\"type\":\"character\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"8e08568a637d5b61234680227791f272\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"VarName\":[\"person_id\",\"outcome\",\"date\",\"first diagnostic code\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Description\":[\"unique person identifier\",\"outcome related to the record\",\"when the record occurred\",\"primary diagnosis used\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Format\":[\"character\",\"character\",\"date\",\"character\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Vocabulary\":[\"from cdm persons\",\"from cdm persons\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Parameters\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Notes and examples\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Source tables and variables\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Retrieved\":[\"yes\",\"yes\",\"yes\",\"yes\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Calculated\":[\"no\",\"no\",\"no\",\"no\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Algorithm_id\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Rule\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"VarName\",\"name\":\"VarName\",\"type\":\"character\"},{\"id\":\"Description\",\"name\":\"Description\",\"type\":\"character\"},{\"id\":\"Format\",\"name\":\"Format\",\"type\":\"character\"},{\"id\":\"Vocabulary\",\"name\":\"Vocabulary\",\"type\":\"character\"},{\"id\":\"Parameters\",\"name\":\"Parameters\",\"type\":\"logical\"},{\"id\":\"Notes and examples\",\"name\":\"Notes and examples\",\"type\":\"logical\"},{\"id\":\"Source tables and variables\",\"name\":\"Source tables and variables\",\"type\":\"logical\"},{\"id\":\"Retrieved\",\"name\":\"Retrieved\",\"type\":\"character\"},{\"id\":\"Calculated\",\"name\":\"Calculated\",\"type\":\"character\"},{\"id\":\"Algorithm_id\",\"name\":\"Algorithm_id\",\"type\":\"logical\"},{\"id\":\"Rule\",\"name\":\"Rule\",\"type\":\"logical\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"520257240dd860d6c6ffd4de1f306f95\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"parameter in the variable name\":[\"outcome\",\"outcome\",\"outcome\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"values\":[\"Infarction\",\"Stroke\",\"Hypertension\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"name of macro\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"parameter in the variable name\",\"name\":\"parameter in the variable name\",\"type\":\"character\"},{\"id\":\"values\",\"name\":\"values\",\"type\":\"character\"},{\"id\":\"name of macro\",\"name\":\"name of macro\",\"type\":\"logical\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"1691ff01bfb058f058aa9418c196a7ec\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"person_id​\":[\"P1​\",\"P3​\",\"P3​\",\"P3​\",\"P3​\",\"P4​\",\"P5\",null,null,null,null,null,null,null,null,null,null,null,null,null],\"Infarction​\":[1,0,0,1,0,0,0,\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\"],\"Stroke​\":[0,1,1,0,0,1,0,\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\"],\"Hypertension​\":[0,0,0,0,1,0,1,\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\"],\"date​\":[\"2020/01/01​\",\"2021/01/01​\",\"2021/06/12​\",\"2021/01/01​\",\"2021/04/15​\",\"2019/05/04​\",\"2021/01/01​\",null,null,null,null,null,null,null,null,null,null,null,null,null],\"first diagnostic code​\":[\"I63​\",\"I64​\",\"I64​\",\"I63​\",\"I10\",\"I64\",\"I10\",null,null,null,null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"person_id​\",\"name\":\"person_id​\",\"type\":\"character\"},{\"id\":\"Infarction​\",\"name\":\"Infarction​\",\"type\":\"numeric\"},{\"id\":\"Stroke​\",\"name\":\"Stroke​\",\"type\":\"numeric\"},{\"id\":\"Hypertension​\",\"name\":\"Hypertension​\",\"type\":\"numeric\"},{\"id\":\"date​\",\"name\":\"date​\",\"type\":\"character\"},{\"id\":\"first diagnostic code​\",\"name\":\"first diagnostic code​\",\"type\":\"character\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"38a19d6d8b6d57fe656951e0d9185648\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r",
    "description": "All outcomes recorded for each person in the study population with date, during the study period",
    "tags": [],
    "title": "D3_all_outcomes",
    "uri": "/step_3/d3_all_outcomes/index.html"
  },
  {
    "content": "\r\r\r\r\r\rMetadata\rData Model\rParameters\rExample\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"medatata_name\":[\"Name of the dataset\",\"Content of the dataset\",\"Unit of observation\",\"Dataset where the list of UoOs is fully listed and with 1 record per UoO\",\"How many observations per UoO\",\"NxUoO\",\"Variables capturing the UoO\",\"Primary key\",\"Parameters\",null,null,null,null,null,null,null,null,null,null,null],\"metadata_content\":[\"D3_PERSONS\",\"contains the cleaned version of PERSONS, where birth date and death date are reconstituted as dates\",\"a person in PERSONS\",\"PERSONS\",\"a person may be observed only once\",\"1\",\"person_id\",\"person_id\",null,null,null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"medatata_name\",\"name\":\"medatata_name\",\"type\":\"character\"},{\"id\":\"metadata_content\",\"name\":\"metadata_content\",\"type\":\"character\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"87b14fcb946b230b803c0e77babcd7bf\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"Varname\":[\"person_id\",\"sex_at_instance_creation\",\"birth_month_imputed\",\"birth_day_imputed\",\"death_day_imputed\",\"death_month_imputed\",\"birth_date\",\"death_date\",\"missing_birth_date\",null,null,null,null,null,null,null,null,null,null,null],\"Description\":[\"unique person identifier\",\"sex at instance creation\",\"flag describing if the month of birth has been imputed\",\"flag describing if the day of birth has been imputed\",\"flag describing if the day of death has been imputed\",\"flag describing if the month of death has been imputed\",\"date reconstituted from day, month and year\",\"date reconstituted from day, month and year\",\"flag for missing date of birth\",null,null,null,null,null,null,null,null,null,null,null],\"Format\":[\"character\",\"character\",\"binary\",\"binary\",\"binary\",\"binary\",\"date\",\"date\",\"binary\",null,null,null,null,null,null,null,null,null,null,null],\"Vocabulary\":[null,\"from CDM PERSONS\",\"1 = imputed\\r\\n0 = otherwise\",\"1 = imputed\\r\\n0 = otherwise\",\"1 = imputed\\r\\n0 = otherwise\",\"1 = imputed\\r\\n0 = otherwise\",null,null,\"1 = missing\\r\\n0 = otherwise\",null,null,null,null,null,null,null,null,null,null,null],\"Notes and examples\":[\"from CDM PERSONS\",\"from CDM PERSONS\",\"If year of birth is not missing then the month will be imputed\",\"If year of birth is not missing then the day will be imputed\",\"Assumed date of death is the end of the last spell for that person.\\r\\nIf year of death is not missing, the same as the assumed one and day of death is missing then the day will be imputed\",\"Assumed date of death is the end of the last spell for that person.\\r\\nIf year of death is not missing, the same as the assumed one and month of death is missing then the month will be imputed\",\"algorithm is in place to handle the case when month and day are missing\",\"algorithm is in place to handle the case when month and day are missing\",\"date of birth is considered missing if and only if year of birth is missing\",null,null,null,null,null,null,null,null,null,null,null],\"Parameters\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Source tables and variables\":[null,null,null,null,null,null,\"OBSERVATION PERIODS/op_start_date\\r\\nOBSERVATION PERIODS/op_end_date\",null,null,null,null,null,null,null,null,null,null,null,null,null],\"Retrieved\":[\"yes\",\"yes\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Calculated\":[null,null,\"yes\",\"yes\",\"yes\",\"yes\",\"yes\",\"yes\",\"yes\",null,null,null,null,null,null,null,null,null,null,null],\"Algorithm_id\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Rule\":[null,null,null,null,null,null,\"If the year, month, day are not missing they are left as is\\r\\n\\r\\nFirst_start_obs_per is the start of the first spell for that person.\\r\\nIf day is missing: \\r\\n- Day is recoded to 30 if month of birth was imputed and (person does not have a spell or the year of birth is different from the assumed one)\\r\\n- Day is recoded to 15 if month of birth was not imputed and (person does not have a spell or the year of birth is different from the assumed one) OR the month of birth is different from the assumed one\\r\\n- Day is recoded to the assumed value if the year_of_birth = assumed_year_birth and person does not have a spell OR if month_of_birth = assumed_month_birth\\r\\n\\r\\nIf month is missing: \\r\\n- Month is recoded to 6 if year of death is missing or different from the assumed one OR the assumed date is before the date of January + assumed day of birth\\r\\n- Month is recoded to floor(month(op_start_date) / 2) if the assumed date is before the date of the assumed month and day of death\\r\\n- Month is recoded to the assumed value if day of birth is missing OR if the assumed date is after or equal the date of the assumed month and day of death\",\"If the year, month, day are not missing they are left as is\\r\\n\\r\\nLast_end_obs_per is the end of the last spell for that person.\\r\\nIf day is missing: \\r\\n- Day is recoded to 1 if year_of_death = assumed_year_death and month_of_death is missing or different than the assumed 1\\r\\n- Day is recoded to the assumed value if and only if year and month are the same as the assumed one\\r\\n\\r\\nIf month is missing: \\r\\n- Month is recoded to 1 if year_of_death = assumed_year_death\",null,null,null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"Varname\",\"name\":\"Varname\",\"type\":\"character\"},{\"id\":\"Description\",\"name\":\"Description\",\"type\":\"character\"},{\"id\":\"Format\",\"name\":\"Format\",\"type\":\"character\"},{\"id\":\"Vocabulary\",\"name\":\"Vocabulary\",\"type\":\"character\"},{\"id\":\"Notes and examples\",\"name\":\"Notes and examples\",\"type\":\"character\"},{\"id\":\"Parameters\",\"name\":\"Parameters\",\"type\":\"logical\"},{\"id\":\"Source tables and variables\",\"name\":\"Source tables and variables\",\"type\":\"character\"},{\"id\":\"Retrieved\",\"name\":\"Retrieved\",\"type\":\"character\"},{\"id\":\"Calculated\",\"name\":\"Calculated\",\"type\":\"character\"},{\"id\":\"Algorithm_id\",\"name\":\"Algorithm_id\",\"type\":\"logical\"},{\"id\":\"Rule\",\"name\":\"Rule\",\"type\":\"character\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"b09ba94363d113e102cdc6f690a35d8e\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"parameter in the variable name\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"values\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"name of macro\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"parameter in the variable name\",\"name\":\"parameter in the variable name\",\"type\":\"logical\"},{\"id\":\"values\",\"name\":\"values\",\"type\":\"logical\"},{\"id\":\"name of macro\",\"name\":\"name of macro\",\"type\":\"logical\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"f545894952d01490ab535e7af1d88bc2\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"person_id\":[\"P0001\",\"P0002\",\"P0003\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"sex_at_instance_creation\":[\"F\",\"M\",\"M\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"birth_month_imputed\":[0,0,1,\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\"],\"birth_day_imputed\":[0,0,1,\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\"],\"death_day_imputed\":[0,0,0,\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\"],\"death_month_imputed\":[0,0,0,\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\"],\"birth_date\":[\"1968-03-15\",\"1998-01-01\",\"1946-06-30\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"death_date\":[null,null,\"2021-02-21\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"missing_birth_date\":[\"F\",\"F\",\"F\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"person_id\",\"name\":\"person_id\",\"type\":\"character\"},{\"id\":\"sex_at_instance_creation\",\"name\":\"sex_at_instance_creation\",\"type\":\"character\"},{\"id\":\"birth_month_imputed\",\"name\":\"birth_month_imputed\",\"type\":\"numeric\"},{\"id\":\"birth_day_imputed\",\"name\":\"birth_day_imputed\",\"type\":\"numeric\"},{\"id\":\"death_day_imputed\",\"name\":\"death_day_imputed\",\"type\":\"numeric\"},{\"id\":\"death_month_imputed\",\"name\":\"death_month_imputed\",\"type\":\"numeric\"},{\"id\":\"birth_date\",\"name\":\"birth_date\",\"type\":\"character\"},{\"id\":\"death_date\",\"name\":\"death_date\",\"type\":\"character\"},{\"id\":\"missing_birth_date\",\"name\":\"missing_birth_date\",\"type\":\"character\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"2a729f2126f8f6676485e84d524327ab\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r",
    "description": "contains the cleaned version of PERSONS, where birth date and death date are reconstituted as dates",
    "tags": [],
    "title": "D3_persons",
    "uri": "/step_1/d3_persons/index.html"
  },
  {
    "content": "\r",
    "description": "",
    "tags": [],
    "title": "D3_selection_criteria_from_PERSONS_to_source_population",
    "uri": "/step_2/d3_selection_criteria_from_persons_to_source_population/index.html"
  },
  {
    "content": "\r\r\r\r\r\rMetadata\rData Model\rParameters\rExample\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"medatata_name\":[\"Name of the dataset\",\"Content of the dataset\",\"Unit of observation\",\"Dataset where the list of UoOs is fully listed and with 1 record per UoO\",\"How many observations per UoO\",\"NxUoO​\",\"Variables capturing the UoO\",\"Primary key\",\"Parameters\",null,null,null,null,null,null,null,null,null,null,null],\"metadata_content\":[\"D4_persontime\",\"Persontime and number of cases calculated by grouping for a specific strata of ageband and sex​\",\"A combination of ageband and sex\",\"All agebands x all genders\",\"As many as the methods of the analysis (in this case, 2)\",\"2\",\"ageband, sex\",\"ageband, sex, method\",null,null,null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"medatata_name\",\"name\":\"medatata_name\",\"type\":\"character\"},{\"id\":\"metadata_content\",\"name\":\"metadata_content\",\"type\":\"character\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"b974494e178b20a61a583642b67eeae1\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"VarName\":[\"ageband\",\"sex\",\"method\",\"pt\",\"cases\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Description\":[\"unique person identifier\",\"sex of the person\",\"methods to be used in calculating the cohort entrance\",\"persontime in days\",\"number of cases\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Format\":[\"character\",\"date\",\"integer\",\"integer\",\"integer\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Vocabulary\":[\"from cdm persons\",null,\"1 = method A\\r\\n2 = method B\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Parameters\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Notes and examples\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Source tables and variables\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Retrieved\":[\"yes\",\"yes\",\"no\",\"no\",\"no\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Calculated\":[\"no\",\"no\",\"yes\",\"yes\",\"yes\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Algorithm_id\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Rule\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"VarName\",\"name\":\"VarName\",\"type\":\"character\"},{\"id\":\"Description\",\"name\":\"Description\",\"type\":\"character\"},{\"id\":\"Format\",\"name\":\"Format\",\"type\":\"character\"},{\"id\":\"Vocabulary\",\"name\":\"Vocabulary\",\"type\":\"character\"},{\"id\":\"Parameters\",\"name\":\"Parameters\",\"type\":\"logical\"},{\"id\":\"Notes and examples\",\"name\":\"Notes and examples\",\"type\":\"logical\"},{\"id\":\"Source tables and variables\",\"name\":\"Source tables and variables\",\"type\":\"logical\"},{\"id\":\"Retrieved\",\"name\":\"Retrieved\",\"type\":\"character\"},{\"id\":\"Calculated\",\"name\":\"Calculated\",\"type\":\"character\"},{\"id\":\"Algorithm_id\",\"name\":\"Algorithm_id\",\"type\":\"logical\"},{\"id\":\"Rule\",\"name\":\"Rule\",\"type\":\"logical\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"d6468ecc124ff07098ce8c49599266a9\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"parameter in the variable name\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"values\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"name of macro\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"parameter in the variable name\",\"name\":\"parameter in the variable name\",\"type\":\"logical\"},{\"id\":\"values\",\"name\":\"values\",\"type\":\"logical\"},{\"id\":\"name of macro\",\"name\":\"name of macro\",\"type\":\"logical\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"f545894952d01490ab535e7af1d88bc2\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"Ageband​\":[\"[0-18)​\",\"[18-35)​\",\"[35-65)​\",\"[65-80)​\",\"80+​\",\"[0-18)​\",\"[18-35)​\",\"[35-65)​\",\"[65-80)​\",\"80+​\",null,null,null,null,null,null,null,null,null,null],\"sex​\":[\"F​\",\"F​\",\"F​\",\"F​\",\"F​\",\"F​\",\"F​\",\"F​\",\"F​\",\"F​\",null,null,null,null,null,null,null,null,null,null],\"Method​\":[\"1​\",\"1​\",\"1​\",\"1​\",\"1​\",\"2​\",\"2​\",\"2​\",\"2​\",\"2​\",null,null,null,null,null,null,null,null,null,null],\"pt​\":[\"123​\",\"646​\",\"97​\",\"342​\",\"7564​\",\"123​\",\"646​\",\"97​\",\"342​\",\"7600​\",null,null,null,null,null,null,null,null,null,null],\"cases​\":[\"10​\",\"9​\",\"8​\",\"5​\",\"0​\",\"7​\",\"8​\",\"6​\",\"9​\",\"7​\",null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"Ageband​\",\"name\":\"Ageband​\",\"type\":\"character\"},{\"id\":\"sex​\",\"name\":\"sex​\",\"type\":\"character\"},{\"id\":\"Method​\",\"name\":\"Method​\",\"type\":\"character\"},{\"id\":\"pt​\",\"name\":\"pt​\",\"type\":\"character\"},{\"id\":\"cases​\",\"name\":\"cases​\",\"type\":\"character\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"a7fe7fa31ce88722eca460aebbc0905b\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r",
    "description": "Persontime and number of cases  calculated by grouping for a specific strata of ageband and sex​",
    "tags": [],
    "title": "D4_persontime",
    "uri": "/step_4/d4_persontime/index.html"
  },
  {
    "content": "\r",
    "description": "",
    "tags": [],
    "title": "D5_Masked_Table_1_Attrition_Table",
    "uri": "/step_7/d5_masked_table_1_attrition_table/index.html"
  },
  {
    "content": "\r",
    "description": "",
    "tags": [],
    "title": "D5_persontime_IRs",
    "uri": "/step_5/d5_persontime_irs/index.html"
  },
  {
    "content": "\r",
    "description": "",
    "tags": [],
    "title": "D5_Table_1_Attrition_Table",
    "uri": "/step_6/d5_table_1_attrition_table/index.html"
  },
  {
    "content": "\r",
    "description": "",
    "tags": [],
    "title": "D6_Table_1_Attrition_Table_Masked",
    "uri": "/step_8/d6_table_1_attrition_table_masked/index.html"
  },
  {
    "content": "\r\r\r\r\r\rMetadata\rData Model\rParameters\rExample\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"medatata_name\":[\"Name of the dataset\",\"Content of the dataset\",\"Unit of observation\",\"Dataset where the list of UoOs is fully listed and with 1 record per UoO\",\"How many observations per UoO\",\"NxUoO\",\"Variables capturing the UoO\",\"Primary key\",\"Parameters\",null,null,null,null,null,null,null,null,null,null,null],\"metadata_content\":[\"D3_output_spells_category\",\"contains the spells exited from CreateSpells, i.e., all the continuous spells of observation period of each person, stratified per op_meaning. op_meaning is by default the same for all observation periods, and is set in 05_subpopulations_restricting_meanings for those data sources where the analysis is conducted on subpopulations having different sets of data banks\",\"a person in OBSERVATION_PERIODS\",\"itself\",\"as many as the spells of that person with that op_meaning\",\"=1\",\"person_id\",\"person_id op_meaning num_spell\",null,null,null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"medatata_name\",\"name\":\"medatata_name\",\"type\":\"character\"},{\"id\":\"metadata_content\",\"name\":\"metadata_content\",\"type\":\"character\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"602462cb12c75f362eb8385fd726b8f4\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"VarName\":[\"person_id\",\"entry_spell_category\",\"exit_spell_category\",\"op_meaning\",\"num_spell\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Description\":[\"unique person identifier\",null,null,\"if there are subpopulations, this variable indicates to swhich subpopulation the spelòl belongs\",\"ordinal number of the spell of the person\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Format\":[\"character\",\"date\",\"date\",\"categorical\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Vocabulary\":[null,null,null,\"depends on subpopulations\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Parameters\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Notes and examples\":[\"from CDM PERSONS\",null,null,\"created by the program based on subpopulations; if there are no subpopulations, this variable is '_overall' for all spells\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Source tables and variables\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Retrieved\":[\"yes\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Calculated\":[null,\"yes\",\"yes\",\"yes\",\"yes\",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Algorithm_id\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Rule\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"VarName\",\"name\":\"VarName\",\"type\":\"character\"},{\"id\":\"Description\",\"name\":\"Description\",\"type\":\"character\"},{\"id\":\"Format\",\"name\":\"Format\",\"type\":\"character\"},{\"id\":\"Vocabulary\",\"name\":\"Vocabulary\",\"type\":\"character\"},{\"id\":\"Parameters\",\"name\":\"Parameters\",\"type\":\"logical\"},{\"id\":\"Notes and examples\",\"name\":\"Notes and examples\",\"type\":\"character\"},{\"id\":\"Source tables and variables\",\"name\":\"Source tables and variables\",\"type\":\"logical\"},{\"id\":\"Retrieved\",\"name\":\"Retrieved\",\"type\":\"character\"},{\"id\":\"Calculated\",\"name\":\"Calculated\",\"type\":\"character\"},{\"id\":\"Algorithm_id\",\"name\":\"Algorithm_id\",\"type\":\"logical\"},{\"id\":\"Rule\",\"name\":\"Rule\",\"type\":\"logical\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"7fc5c413c48a9e4e475102dfb83323b2\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"parameter in the variable name\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"values\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"name of macro\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"parameter in the variable name\",\"name\":\"parameter in the variable name\",\"type\":\"logical\"},{\"id\":\"values\",\"name\":\"values\",\"type\":\"logical\"},{\"id\":\"name of macro\",\"name\":\"name of macro\",\"type\":\"logical\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"f545894952d01490ab535e7af1d88bc2\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"person_id\":[\"P0001\",\"P0002\",\"P0002\",\"P0003\",\"P0004\",\"P0005\",\"P0006\",\"P0007\",\"P0007\",null,null,null,null,null,null,null,null,null,null,null],\"op_meaning\":[\"meaningsHOSP\",\"meaningsHOSP\",\"meaningsHOSP\",\"meaningsHOSP\",\"meaningsHOSP\",\"meaningsHOSP\",\"meaningsHOSP\",\"meaningsHOSP\",\"meaningsHOSP\",null,null,null,null,null,null,null,null,null,null,null],\"num_spell\":[1,1,2,1,1,1,1,1,2,\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\",\"NA\"],\"entry_spell_category\":[\"1997-10-22T00:00:00Z\",\"2016-12-08T00:00:00Z\",\"2018-10-29T00:00:00Z\",\"2006-12-18T00:00:00Z\",\"1983-04-02T00:00:00Z\",\"2016-08-14T00:00:00Z\",\"2019-12-06T00:00:00Z\",\"2016-06-02T00:00:00Z\",\"2017-07-13T00:00:00Z\",null,null,null,null,null,null,null,null,null,null,null],\"exit_spell_category\":[\"9999-12-31T00:00:00Z\",\"2018-02-08T00:00:00Z\",\"2021-06-02T00:00:00Z\",\"9999-12-31T00:00:00Z\",\"9999-12-31T00:00:00Z\",\"9999-12-31T00:00:00Z\",\"9999-12-31T00:00:00Z\",\"2016-11-16T00:00:00Z\",\"9999-12-31T00:00:00Z\",null,null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"person_id\",\"name\":\"person_id\",\"type\":\"character\"},{\"id\":\"op_meaning\",\"name\":\"op_meaning\",\"type\":\"character\"},{\"id\":\"num_spell\",\"name\":\"num_spell\",\"type\":\"numeric\"},{\"id\":\"entry_spell_category\",\"name\":\"entry_spell_category\",\"type\":\"Date\"},{\"id\":\"exit_spell_category\",\"name\":\"exit_spell_category\",\"type\":\"Date\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"1d671048efaf265d8800a2ce89fbea7a\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r",
    "description": "contains the spells exited from CreateSpells, i.e., all the continuous spells of observation period of each person, stratified per op_meaning. op_meaning is by default the same for all observation periods, and is set in 05_subpopulations_restricting_meanings for those data sources where the analysis is conducted on subpopulations having different sets of data banks",
    "tags": [],
    "title": "D3_output_spells_category",
    "uri": "/step_1/d3_output_spells_category/index.html"
  },
  {
    "content": "\r",
    "description": "",
    "tags": [],
    "title": "D3_TD_all",
    "uri": "/step_3/d3_td_all/index.html"
  },
  {
    "content": "\r",
    "description": "",
    "tags": [],
    "title": "D4_source_population",
    "uri": "/step_2/d4_source_population/index.html"
  },
  {
    "content": "\r",
    "description": "",
    "tags": [],
    "title": "D5_Masked_Table_2_Cohort_characteristics_expunexp",
    "uri": "/step_7/d5_masked_table_2_cohort_characteristics_expunexp/index.html"
  },
  {
    "content": "\r",
    "description": "",
    "tags": [],
    "title": "D5_Table_2_Cohort_characteristics_expunexp",
    "uri": "/step_6/d5_table_2_cohort_characteristics_expunexp/index.html"
  },
  {
    "content": "\r",
    "description": "",
    "tags": [],
    "title": "D6_Table_2_Cohort_characteristics_expunexp_Masked",
    "uri": "/step_8/d6_table_2_cohort_characteristics_expunexp_masked/index.html"
  },
  {
    "content": "\r",
    "description": "",
    "tags": [],
    "title": "D3_cleaned_spells",
    "uri": "/step_1/d3_cleaned_spells/index.html"
  },
  {
    "content": "\r",
    "description": "",
    "tags": [],
    "title": "D3_cohort_expunexp",
    "uri": "/step_3/d3_cohort_expunexp/index.html"
  },
  {
    "content": "\r",
    "description": "",
    "tags": [],
    "title": "D5_Flowchart_exclusion_criteria",
    "uri": "/step_2/d5_flowchart_exclusion_criteria/index.html"
  },
  {
    "content": "\r",
    "description": "",
    "tags": [],
    "title": "D5_Masked_Table_3_Covariates_expunexp",
    "uri": "/step_7/d5_masked_table_3_covariates_expunexp/index.html"
  },
  {
    "content": "\r",
    "description": "",
    "tags": [],
    "title": "D5_Table_3_Covariates_expunexp",
    "uri": "/step_6/d5_table_3_covariates_expunexp/index.html"
  },
  {
    "content": "\r",
    "description": "",
    "tags": [],
    "title": "D6_Table_3_Covariates_expunexp_Masked",
    "uri": "/step_8/d6_table_3_covariates_expunexp_masked/index.html"
  },
  {
    "content": "\r\r\r\r\r\rMetadata\rData Model\rParameters\rExamples\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"medatata_name\":[\"Name of the dataset\",\"Content of the dataset\",\"Unit of observation\",\"Dataset where the list of UoOs is fully listed and with 1 record per UoO\",\"How many observations per UoO\",\"NxUoO\",\"Variables capturing the UoO\",\"Primary key\",\"Parameters\",null,null,null,null,null,null,null,null,null,null,null],\"metadata_content\":[\"conceptsetdataset\",\"these are multiple datasets, one per each conceptset, which is a value in the list c(conceptsets_exact_matching, conceptsets_children_matching), set in 07_algorithms. Each conceptset dataset is named after the conceptset. Each conceptset is associated to a list of codes. The dataset is obtained by retrieving records from the CDM bearing a code that match one of the codes in the codelist. The matching can be exact (for the conceptsets in conceptsets_exact_matching) or per ascendant (for conceptsets in conceptsets_children_matching) . Records are retrieved from the EVENTS table, but also from other tables which may bear a record, such as PROCEDURES or VACCINES\",\"a record in the CDM bearing a code that matches the codelist of the conceptset corresponding to the name conceptsetdataset\",\"itself\",\"unique\",\"1\",\"none\",null,\"conceptsetdataset\",null,null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"medatata_name\",\"name\":\"medatata_name\",\"type\":\"character\"},{\"id\":\"metadata_content\",\"name\":\"metadata_content\",\"type\":\"character\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"3a14fb88afc0e42641425d482ab63e76\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"VarName\":[\"person_id\",\"date\",\"end_date_record\",\"event_code\",\"event_record_vocabulary\",\"text_linked_to_event_code\",\"event_free_text\",\"present_on_admission\",\"laterality_of_event\",\"meaning_renamed\",\"origin_renamed\",\"visit_occurrence_id\",null,null,null,null,null,null,null,null],\"Description\":[\"A foreign key to the person in PERSONS table who experienced the event\",\"Start date of the visit that lead to the recording of the event code or free text\",\"End date of the visit that lead to the recording of the event code or free text\",\"Code characterizing the event according to the vocabulary defined in \\\"event_record_vocabulary\\\"\",\"Vocabulary to which the 'event_code' belongs to; or, if ths record contains 'event_free_text' , this column contains the indication 'free_text'\",\"If in the original record the code is modified by a text, include this text here\",\"Use this cell if in the record there is no code, just a text\",\"Indicates the presence of the event at the start of the visit or hospital admission\",\"Laterality of the event\",\"This is a ConcePTION classification of the nature of the original record associated with this record\",\"name of the source table that originated the record\",\"A foreign key linking this record to the VISIT_OCCURRENCE table\",null,null,null,null,null,null,null,null],\"Format\":[\"Character\",\"Character yyyymmdd\",\"Character yyyymmdd\",\"Character\",\"Character\",\"Character\",\"Character\",\"Character\",\"Character\",\"Character\",\"Character\",\"Character\",null,null,null,null,null,null,null,null],\"Vocabulary\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Parameters\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Notes and examples\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Source tables and variables\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Retrieved\":[\"yes\",\"yes\",\"yes\",\"yes\",\"yes\",\"yes\",\"yes\",\"yes\",\"yes\",\"yes\",\"yes\",\"yes\",null,null,null,null,null,null,null,null],\"Calculated\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Algorithm_id\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"Rule\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"VarName\",\"name\":\"VarName\",\"type\":\"character\"},{\"id\":\"Description\",\"name\":\"Description\",\"type\":\"character\"},{\"id\":\"Format\",\"name\":\"Format\",\"type\":\"character\"},{\"id\":\"Vocabulary\",\"name\":\"Vocabulary\",\"type\":\"logical\"},{\"id\":\"Parameters\",\"name\":\"Parameters\",\"type\":\"logical\"},{\"id\":\"Notes and examples\",\"name\":\"Notes and examples\",\"type\":\"logical\"},{\"id\":\"Source tables and variables\",\"name\":\"Source tables and variables\",\"type\":\"logical\"},{\"id\":\"Retrieved\",\"name\":\"Retrieved\",\"type\":\"character\"},{\"id\":\"Calculated\",\"name\":\"Calculated\",\"type\":\"logical\"},{\"id\":\"Algorithm_id\",\"name\":\"Algorithm_id\",\"type\":\"logical\"},{\"id\":\"Rule\",\"name\":\"Rule\",\"type\":\"logical\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"2eecdedc9751b05b8d842e99b1c6bcc0\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"parameter in the variable name\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"values\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"name of macro\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"parameter in the variable name\",\"name\":\"parameter in the variable name\",\"type\":\"logical\"},{\"id\":\"values\",\"name\":\"values\",\"type\":\"logical\"},{\"id\":\"name of macro\",\"name\":\"name of macro\",\"type\":\"logical\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"f545894952d01490ab535e7af1d88bc2\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r\r{\"x\":{\"tag\":{\"name\":\"Reactable\",\"attribs\":{\"data\":{\"person_id\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"date\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"end_date_record\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"event_code\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"event_record_vocabulary\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"text_linked_to_event_code\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"event_free_text\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"present_on_admission\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"laterality_of_event\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"meaning_renamed\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"origin_renamed\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],\"visit_occurrence_id\":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},\"columns\":[{\"id\":\"person_id\",\"name\":\"person_id\",\"type\":\"logical\"},{\"id\":\"date\",\"name\":\"date\",\"type\":\"logical\"},{\"id\":\"end_date_record\",\"name\":\"end_date_record\",\"type\":\"logical\"},{\"id\":\"event_code\",\"name\":\"event_code\",\"type\":\"logical\"},{\"id\":\"event_record_vocabulary\",\"name\":\"event_record_vocabulary\",\"type\":\"logical\"},{\"id\":\"text_linked_to_event_code\",\"name\":\"text_linked_to_event_code\",\"type\":\"logical\"},{\"id\":\"event_free_text\",\"name\":\"event_free_text\",\"type\":\"logical\"},{\"id\":\"present_on_admission\",\"name\":\"present_on_admission\",\"type\":\"logical\"},{\"id\":\"laterality_of_event\",\"name\":\"laterality_of_event\",\"type\":\"logical\"},{\"id\":\"meaning_renamed\",\"name\":\"meaning_renamed\",\"type\":\"logical\"},{\"id\":\"origin_renamed\",\"name\":\"origin_renamed\",\"type\":\"logical\"},{\"id\":\"visit_occurrence_id\",\"name\":\"visit_occurrence_id\",\"type\":\"logical\"}],\"sortable\":false,\"searchable\":true,\"pagination\":false,\"highlight\":true,\"bordered\":true,\"striped\":true,\"style\":{\"maxWidth\":1800},\"height\":\"600px\",\"dataKey\":\"dea1dac27a52a617ec5391734819addb\"},\"children\":[]},\"class\":\"reactR_markup\"},\"evals\":[],\"jsHooks\":[]}\r\r",
    "description": "these are multiple datasets, one per each conceptset, which is a value in the list c(conceptsets_exact_matching, conceptsets_children_matching), set in 07_algorithms. Each conceptset dataset is named after the conceptset. Each conceptset is associated to a list of codes. The dataset is obtained by retrieving records from the CDM bearing a code that match one of the codes in the codelist. The matching can be exact (for the conceptsets in conceptsets_exact_matching) or per ascendant (for conceptsets in conceptsets_children_matching) . Records are retrieved from the EVENTS table, but also from other tables which may bear a record, such as PROCEDURES or VACCINES",
    "tags": [],
    "title": "D3_conceptsetdataset",
    "uri": "/step_1/d3_conceptsetdataset/index.html"
  },
  {
    "content": "\r",
    "description": "",
    "tags": [],
    "title": "D5_Masked_Table_4_IR",
    "uri": "/step_7/d5_masked_table_4_ir/index.html"
  },
  {
    "content": "\r",
    "description": "",
    "tags": [],
    "title": "D5_Table_4_IR",
    "uri": "/step_6/d5_table_4_ir/index.html"
  },
  {
    "content": "\r",
    "description": "",
    "tags": [],
    "title": "D6_Table_4_IR_Masked",
    "uri": "/step_8/d6_table_4_ir_masked/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "VAC4EU Academy Codebook course Documentation",
    "uri": "/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
