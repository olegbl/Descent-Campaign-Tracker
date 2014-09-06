// data for:
//   * descent second edition base game
//   * labyrinth of ruin expansion
//   * lair of the wyrm expansion
//   * shadow of nerekhall expansion
//   * manor of ravens expansion
//   * the trollfens expansion
// compiled by olegbl

var data = {
	"items": {
		"Act 1": [
			"Elm Greatbow",
			"Heavy Cloak",
			"Sling",
			"Iron Spear",
			"Crossbow",
			"Leather Armor",
			"Sunburst",
			"Mana Weave",
			"Lucky Charm",
			"Scorpion Helm",
			"Iron Shield",
			"Iron Battleaxe",
			"Chainmail",
			"Steel Broadsword",
			"Magic Staff",
			"Immolation",
			"Iron Shield",
			"Light Hammer",
			"Ring of Power",
			"Serpent Dagger",
			"Mace of Aver",
			"Bearded Axe",
			"Teleportation Rune",
			"Bow of Bone",
			"Rune Plate",
			"Thief's Vest",
			"Shield of Light",
			"Jinn's Lamps",
			"Elven Boots",
			"Poisoned Blowgun",
			"Jeweled Mace",
			"Incendiary Arrows",
			"Ironbound Rune",
			"Phoenix Pendant",
			"Bloody Dagger",
			"Bone Blade",
			"City Guard's Bow",
			"Boots of Iron",
			"Baron's Cloak",
			"Cloak of Mists",
			"Archaic Scroll",
			"Halberd",
			"Handbow",
			"Magma Blast",
			"Flash Powder",
			"Belt of Waterwalking",
			"Belt of Alchemy",
			"Lifedrain Scepter",
			"Dire Flail",
			"Trident",
			"Mapstone",
			"Guardian Axe",
			"Deflecting Shield",
			"Undying Skull",
			"Blessed Shield",
			"White Wolf Cloak",
			"Staff of Greyhaven",
			"Shadow Bracers"
		],
		"Act 2": [
			"Dragontooth Hammer"
		],
		"Heroes Relics": [
			"Dawnblade"
		],
		"Overlord Relics": [
			"Duskblade"
		]
	},
	"classes": {
		"Knight": {
			"items": {
				"Iron Longsword": 50,
				"Wooden Shield": 50
			},
			"skills": {
				"Oath of Honor": 0,
				"Advance": 1,
				"Challenge": 1,
				"Defend": 1,
				"Defense Training": 2,
				"Guard": 2,
				"Shield Slam": 2,
				"Inspiration": 3,
				"Stalwart": 3
			}
		},
		"Berserker": {
			"items": {
				"Chipped Greataxe": 50
			},
			"skills": {
				"Rage": 0,
				"Brute": 1,
				"Counter Attack": 1,
				"Cripple": 1,
				"Charge": 2,
				"Weapon Mastery": 2,
				"Whirlwind": 2,
				"Death Rage": 3,
				"Execute": 3
			}
		}
	},
	"overlord": {
		"start": [
			"Dash",
			"Dash",
			"Frenzy",
			"Frenzy"
		],
		"skills": {
			"dash": 0,
			"frenzy": 0
		}
	},
	"campaigns": {
		"The Shadow Rune": {
			// intro
			"First Blood": {
				act: "Intro"
			},
			// act 1
			"A Fat Goblin": {
				act: "Act 1",
				valid: [
					{ act: "Intro", winner: "any", count: [1, 1] },
					{ act: "Act 1", winner: "any", count: [0, 2] }
				]
			},
			"Castle Daerion": {
				act: "Act 1",
				valid: [
					{ act: "Intro", winner: "any", count: [1, 1] },
					{ act: "Act 1", winner: "any", count: [0, 2] }
				]
			},
			"The Cardinal's Plight": {
				act: "Act 1",
				valid: [
					{ act: "Intro", winner: "any", count: [1, 1] },
					{ act: "Act 1", winner: "any", count: [0, 2] }
				]
			},
			"The Masquerade Ball": {
				act: "Act 1",
				valid: [
					{ act: "Intro", winner: "any", count: [1, 1] },
					{ act: "Act 1", winner: "any", count: [0, 2] }
				]
			},
			"Death on the Wing": {
				act: "Act 1",
				valid: [
					{ act: "Intro", winner: "any", count: [1, 1] },
					{ act: "Act 1", winner: "any", count: [0, 2] }
				]
			},
			// interlude
			"The Shadow Vault": {
				act: "Interlude",
				valid: [
					{ act: "Act 1", winner: "any", count: [3, 3] },
					{ act: "Act 1", winner: "heroes", count: [2, 3] }
				]
			},
			"The Overlord Revealed": {
				act: "Interlude",
				valid: [
					{ act: "Act 1", winner: "any", count: [3, 3] },
					{ act: "Act 1", winner: "overlord", count: [2, 3] }
				]
			},
			// act 2
			"The Monster's Hoard": {
				act: "Act 2",
				valid: [
					{ act: "Interlude", winner: "any", count: [1, 1] },
					{ act: "Act 2", winner: "any", count: [0, 2] },
					{ scenario: "A Fat Goblin", winner: "heroes", count: [1, 1] }
				]
			},
			"The Frozen Spire": {
				act: "Act 2",
				valid: [
					{ act: "Interlude", winner: "any", count: [1, 1] },
					{ act: "Act 2", winner: "any", count: [0, 2] },
					{ scenario: "A Fat Goblin", winner: "overlord", count: [1, 1] }
				]
			},
			"The Dawnblade": {
				act: "Act 2",
				valid: [
					{ act: "Interlude", winner: "any", count: [1, 1] },
					{ act: "Act 2", winner: "any", count: [0, 2] },
					{ scenario: "Castle Daerion", winner: "heroes", count: [1, 1] }
				]
			},
			"The Desecerated Tomb": {
				act: "Act 2",
				valid: [
					{ act: "Interlude", winner: "any", count: [1, 1] },
					{ act: "Act 2", winner: "any", count: [0, 2] },
					{ scenario: "Castle Daerion", winner: "overlord", count: [1, 1] }
				]
			},
			"Enduring the Elements": {
				act: "Act 2",
				valid: [
					{ act: "Interlude", winner: "any", count: [1, 1] },
					{ act: "Act 2", winner: "any", count: [0, 2] },
					{ scenario: "The Cardinal's Plight", winner: "heroes", count: [1, 1] }
				]
			},
			"The Ritual of Shadows": {
				act: "Act 2",
				valid: [
					{ act: "Interlude", winner: "any", count: [1, 1] },
					{ act: "Act 2", winner: "any", count: [0, 2] },
					{ scenario: "The Cardinal's Plight", winner: "overlord", count: [1, 1] }
				]
			},
			"Blood of Heroes": {
				act: "Act 2",
				valid: [
					{ act: "Interlude", winner: "any", count: [1, 1] },
					{ act: "Act 2", winner: "any", count: [0, 2] },
					{ scenario: "The Masquerade Ball", winner: "heroes", count: [1, 1] }
				]
			},
			"The Twin Idols": {
				act: "Act 2",
				valid: [
					{ act: "Interlude", winner: "any", count: [1, 1] },
					{ act: "Act 2", winner: "any", count: [0, 2] },
					{ scenario: "The Masquerade Ball", winner: "overlord", count: [1, 1] }
				]
			},
			"The Wyrm Turns": {
				act: "Act 2",
				valid: [
					{ act: "Interlude", winner: "any", count: [1, 1] },
					{ act: "Act 2", winner: "any", count: [0, 2] },
					{ scenario: "Death on the Wing", winner: "heroes", count: [1, 1] }
				]
			},
			"The Wyrm Rises": {
				act: "Act 2",
				valid: [
					{ act: "Interlude", winner: "any", count: [1, 1] },
					{ act: "Act 2", winner: "any", count: [0, 2] },
					{ scenario: "Death on the Wing", winner: "overlord", count: [1, 1] }
				]
			},
			// finale
			"Gryvorn Unleashed": {
				act: "Finale",
				valid: [
					{ act: "Act 2", winner: "any", count: [3, 3] },
					{ act: "Act 2", winner: "heroes", count: [2, 3] }
				]
			},
			"The Man Who Would Be King": {
				act: "Finale",
				valid: [
					{ act: "Act 2", winner: "any", count: [3, 3] },
					{ act: "Act 2", winner: "overlord", count: [2, 3] }
				]
			}
		}
	}
};