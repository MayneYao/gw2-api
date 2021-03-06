// Bulk-expanded endpoint that provides profession metadata.

// GET /v2/professions

[ "Thief", "Warrior", "Necromancer", /* ... */ ]

// GET /v2/professions/Thief
// GET /v2/professions?id=Thief

{
	"id" : "Thief",
	"name" : "Thief",
	"icon" : "https://render.guildwars2.com/...",
	"icon_big" : "https://render.guildwars2.com/...",
	"specializations" : [
		28, 35, 20, 54, 44, 7
	],
	"training" : [
		{
			"id" : 52,
			"category" : "Skills",
			"name" : "Signet Training",
			"track" : [
				{
					"cost" : 2,
					"type" : "Skill",
					"skill_id" : 13064
				},
				{
					"cost" : 5,
					"type" : "Skill",
					"skill_id" : 13046
				},
				// ...
			]
		},
		{
			"id" : 116,
			"category" : "Specializations",
			"name" : "Shadow Arts",
			"track" : [
				{
					"cost" : 2,
					"type" : "Trait",
					"trait_id" : 1294
				},
				{
					"cost" : 5,
					"type" : "Trait",
					"trait_id" : 1160
				},
				// ...
			]
		},
		{
			"id" : 106,
			"category" : "EliteSpecializations",
			"name" : "Daredevil",
			"track" : [
				{
					"cost" : 30,
					"type" : "Trait",
					"trait_id" : 1957
				},
				{
					"cost" : 40,
					"type" : "Trait",
					"trait_id" : 1994
				},
				{
					"cost" : 55,
					"type" : "Skill",
					"skill_id" : 31623
				}
				// ...
			]
		}
	]
}

// Can also fetch multiple professions via bulk-expanded options, e.g.
//
// GET /v2/professions?ids=Thief,Warrior
// GET /v2/professions?page=0&page_size=2

[
	{
		"id" : "Thief",
		// ...
	},
	{
		"id" : "Warrior",
		// ...
	}
]
