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
      "Archaic Scroll",
      "Baron's Cloak",
      "Bearded Axe",
      "Belt of Alchemy",
      "Belt of Waterwalking",
      "Blessed Shield",
      "Bloody Dagger",
      "Bone Blade",
      "Boots of Iron",
      "Bow of Bone",
      "Chainmail",
      "City Guard's Bow",
      "Cloak of Mists",
      "Crossbow",
      "Deflecting Shield",
      "Dire Flail",
      "Elm Greatbow",
      "Elven Boots",
      "Flash Powder",
      "Guardian Axe",
      "Halberd",
      "Handbow",
      "Heavy Cloak",
      "Immolation",
      "Incendiary Arrows",
      "Iron Battleaxe",
      "Iron Shield",
      "Iron Spear",
      "Ironbound Rune",
      "Jeweled Mace",
      "Jinn's Lamps",
      "Leather Armor",
      "Lifedrain Scepter",
      "Light Hammer",
      "Lucky Charm",
      "Mace of Aver",
      "Magic Staff",
      "Magma Blast",
      "Mana Weave",
      "Mapstone",
      "Phoenix Pendant",
      "Poisoned Blowgun",
      "Ring of Power",
      "Rune Plate",
      "Scorpion Helm",
      "Serpent Dagger",
      "Shadow Bracers",
      "Shield of Light",
      "Sling",
      "Staff of Greyhaven",
      "Steel Broadsword",
      "Sunburst",
      "Teleportation Rune",
      "Thief's Vest",
      "Trident",
      "Undying Skull",
      "White Wolf Cloak"
    ],
    "Act 2": [
      "Belt of Strength",
      "Black Iron Helm",
      "Blasting Rune",
      "Boomerang",
      "Bow of the Eclipse",
      "Bow of the Sky",
      "Cloak of Deception",
      "Demonhide Leather",
      "Dragontooth Hammer",
      "Dwarven Firebomb",
      "Elven Cloak",
      "Glaive",
      "Golden Mask",
      "Grinding Axe",
      "Hammer of Doom",
      "Heart Seeker",
      "Heavy Steel Shield",
      "Ice Storm",
      "Inscribed Robes",
      "Iron Claws",
      "Iron-Bound Ring",
      "Ironbound Glaive",
      "Ironbound Shield",
      "Latari Longbow",
      "Lightning Strike",
      "Mace of Kellos",
      "Merciful Boots",
      "Nerekhall Plate",
      "Obsidian Greataxe",
      "Obsidian Scalemail",
      "Platemail",
      "Rage Blade",
      "Rat-Tooth Dagger",
      "Repeating Crossbow",
      "Rune of Blades",
      "Rune of Fate",
      "Rune of Misery",
      "Scalemail",
      "Shadow Tome",
      "Shroud of Dusk",
      "Staff of Kellos",
      "Staff of the Wild",
      "Star of Kellos",
      "Steel Greatsword",
      "Stone Armor",
      "Tival Crystal",
      "Vestments of Kellos",
      "Winged Blade"
    ],
    "Heroes Relics": [
      "Aurium Mail",
      "Book of Stars",
      "Dawnblade",
      "Fortuna's Dice",
      "Gauntlets of Power",
      "Immunity Elixir",
      "Living Heart",
      "Mending Talisman",
      "Shadow Plotter",
      "Shards of Ithyndrus",
      "Shield of the Dark God",
      "Spirited Scythe",
      "Staff of Light",
      "Sun Stone",
      "The Manor's Heart",
      "The Shadow Rune",
      "Trueshot",
      "Valyndra's Blade",
      "Wanderer's Stone",
      "Workman's Ring",
      "Ynfernal Rune"
    ],
    "Overlord Relics": [
      "Bones of Woe",
      "Curative Vial",
      "Duskblade",
      "Gallen Heart",
      "Gauntlets of Spite",
      "Her Majesty's Malice",
      "Omen of Blight",
      "Scorpion's Kiss",
      "Shadow Plotter",
      "Shards of Ithyndrus",
      "Shield of Zorek's Favor",
      "Soulless Scythe",
      "Staff of Shadows",
      "Stone of Wayward Means",
      "Sun's Fury",
      "Taskmaster's Ring",
      "The Manor's Heart",
      "The Shadow Rune",
      "Tome of the Five Lies",
      "Valyndra's Gift",
      "Ynfernal Rune"
    ]
  },
  "classes": {
    // warriors
    "Knight": {
      "archetype": "Warrior",
      "items": [
        "Iron Longsword",
        "Wooden Shield"
      ],
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
      "archetype": "Warrior",
      "items": [
        "Chipped Greataxe"
      ],
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
    },
    "Beastmaster": {
      "archetype": "Warrior",
      "items": [
        "Hunting Spear",
        "Skinning Knife"
      ],
      "skills": {
        "Bound by the Hunt": 0,
        "Survivalist": 1,
        "Stalker": 1,
        "Bestial Rage": 1,
        "Shadow Hunter": 2,
        "Feral Frenzy": 2,
        "Predator": 3,
        "Changing Skins": 3
      }
    },
    "Champion": {
      "archetype": "Warrior",
      "items": [
        "Worn Greatsword",
        "Horn of Courage"
      ],
      "skills": {
        "Valor of Heroes": 0,
        "Inspiring Presence": 1,
        "A Living Legend": 1,
        "Glory of Battle": 1,
        "Stoic Resolve": 2,
        "Motivating Charge": 2,
        "No Mercy": 2,
        "Valorous Strike": 3,
        "For the Cause": 3
      }
    },
    "Skirmisher": {
      "archetype": "Warrior",
      "items": [
        "Jagged Handaxe",
        "Rusted Handaxe"
      ],
      "skills": {
        "Dual Strike": 0,
        "Deep Wounds": 1,
        "Back in Action": 1,
        "Keen Edge": 1,
        "Born in Battle": 2,
        "Unrelenting": 2,
        "Ever in Motion": 2,
        "Carve a Path": 3,
        "Unstoppable": 3
      }
    },
    "Marshall": {
      "archetype": "Warrior",
      "items": [
        "War Hammer",
        "Signet Ring"
      ],
      "skills": {
        "Retribution": 0,
        "Zealous Fire": 1,
        "Shockwave": 1,
        "Just Reward": 1,
        "Vigilant Watch": 2,
        "I Am The Law": 2,
        "By The Book": 2,
        "Last Stand": 3,
        "Crushing Blow": 3
      }
    },
    // scouts
    "Treasure Hunter": {
      "archetype": "Scout",
      "items": [
        "Leather Whip",
        "The Dead Man's Compass"
      ],
      "skills": {
        "Delver": 0,
        "Survey": 1,
        "Dungeoneer": 1,
        "Gold Rush": 1,
        "Sleight of Hand": 2,
        "Guard the Spoils": 2,
        "Lure of Fortune": 2,
        "Finder's Feeker's": 3,
        "Trail of Riches": 3
      }
    },
    "Bounty Hunter": {
      "archetype": "Scout",
      "items": [
        "Double Crossbow"
      ],
      "skills": {
        "Chosen Target": 0,
        "Not So Fast": 1,
        "Lie In Wait": 1,
        "Longshot": 1,
        "Evil Eye": 2,
        "Dark Iron Chains": 2,
        "Undercover": 2,
        "Payday": 3,
        "Rapid Fire": 3
      }
    },
    "Stalker": {
      "archetype": "Scout",
      "items": [
        "Hunting Knife",
        "Black Widow's Web"
      ],
      "skills": {
        "Set Trap": 0,
        "Makeshift Trap": 1,
        "Hunter's Mark": 1,
        "Exploit": 1,
        "Poison Barbs": 2,
        "Easy Prey": 2,
        "Lay of the Land": 2,
        "Ambush": 3,
        "Upper Hand": 3
      }
    },
    "Shadow Walker": {
      "archetype": "Scout",
      "items": [
        "Feathered Hatchet",
        "Tribal Cloak"
      ],
      "skills": {
        "Soul Bound": 0,
        "Dark Servant": 1,
        "Faithful Friend": 1,
        "Through the Veil": 1,
        "Endless Void": 2,
        "Dark Shift": 2,
        "Otherwordly": 2,
        "Shadow Puppet": 3,
        "Shadow Step": 3
      }
    },
    "Wildlander": {
      "archetype": "Scout",
      "items": [
        "Yew Shortbow"
      ],
      "skills": {
        "Nimble": 0,
        "Eagle Eyes": 1,
        "Danger Sense": 1,
        "Accurate": 1,
        "First Strike": 2,
        "Fleet of Foot": 2,
        "Bow Mastery": 2,
        "Black Arrow": 3,
        "Running Shot": 3
      }
    },
    "Thief": {
      "archetype": "Scout",
      "items": [
        "Throwing Knives",
        "Lucky Charm"
      ],
      "skills": {
        "Greedy": 0,
        "Appraisal": 1,
        "Sneaky": 1,
        "Dirty Tricks": 1,
        "Tumble": 2,
        "Unseen": 2,
        "Caltrops": 2,
        "Lurk": 3,
        "Bushwhack": 3
      }
    },
    // mages
    "Necromancer": {
      "archetype": "Mage",
      "items": [
        "Reaper's Scythe"
      ],
      "skills": {
        "Raise Dead": 0,
        "Deathly Haste": 1,
        "Fury of Undeath": 1,
        "Corpse Blast": 1,
        "Vampiric Blast": 2,
        "Undead Might": 2,
        "Dark Pact": 2,
        "Army of Death": 3,
        "Dying Command": 3
      }
    },
    "Geomancer": {
      "archetype": "Mage",
      "items": [
        "Stasis Rune"
      ],
      "skills": {
        "Terracall": 0,
        "Stone Tongue": 1,
        "Earthen Anguish": 1,
        "Quaking World": 1,
        "Ley Line": 2,
        "Molten Fury": 2,
        "Ways of Stone": 2,
        "Gravity Spike": 3,
        "Cataclysm": 3
      }
    },
    "Runemaster": {
      "archetype": "Mage",
      "items": [
        "Arcane Bolt"
      ],
      "skills": {
        "Runic Knowledge": 0,
        "Exploding Rune": 1,
        "Inscribe Rune": 1,
        "Ghost Armor": 1,
        "Rune Mastery": 2,
        "Iron Will": 2,
        "Runic Sorcery": 2,
        "Break the Rune": 3,
        "Quick Casting": 3
      }
    },
    "Conjurer": {
      "archetype": "Mage",
      "items": [
        "Prismatic Staff"
      ],
      "skills": {
        "Mirror Image": 0,
        "Channeling": 0,
        "Refraction": 1,
        "Illusory Path": 1,
        "Many Friends": 1,
        "Sleight of Hand": 2,
        "Focus Fire": 2,
        "Blinding Light": 2,
        "Vortex": 3,
        "Prismatic Assault": 3
      }
    },
    "Hexer": {
      "archetype": "Mage",
      "items": [
        "Staff of the Grave"
      ],
      "skills": {
        "Enfeebling Hex": 0,
        "Affliction": 1,
        "Plague Spasm": 1,
        "Viral Hex": 1,
        "Fel Command": 2,
        "Internal Rot": 2,
        "Crippling Curse": 2,
        "Plague Cloud": 3,
        "Accursed Arms": 3
      }
    },
    // healers
    "Apothecary": {
      "archetype": "Healer",
      "items": [
        "Smoking Vials"
      ],
      "skills": {
        "Brew Elixir": 0,
        "Herbal Lore": 1,
        "Concoction": 1,
        "Inky Substance": 1,
        "Secret Formula": 2,
        "Bottled Courage": 2,
        "Protective Tonic": 2,
        "Potent Remedies": 3,
        "Hidden Stash": 3
      }
    },
    "Disciple": {
      "archetype": "Healer",
      "items": [
        "Iron Mace",
        "Wooden Shield"
      ],
      "skills": {
        "Prayer of Healing": 0,
        "Armor of Faith": 1,
        "Cleansing Touch": 1,
        "Blessed Strike": 1,
        "Prayer of Peace": 2,
        "Divine Fury": 2,
        "Time of Need": 2,
        "Radiant Light": 3,
        "Holy Power": 3
      }
    },
    "Spiritspeaker": {
      "archetype": "Healer",
      "items": [
        "Oask Staff"
      ],
      "skills": {
        "Stoneskin": 0,
        "Shared Pain": 1,
        "Healing Rain": 1,
        "Drain Spirit": 1,
        "Cloud of Mist": 2,
        "Nature's Bounty": 2,
        "Tempest": 2,
        "Ancestor's Spirits": 3,
        "Vigor": 3
      }
    },
    "Prophet": {
      "archetype": "Healer",
      "items": [
        "Iron Flail",
        "Sage's Tome"
      ],
      "skills": {
        "Soothing Insight": 0,
        "Grim Fate": 1,
        "Battle Vision": 1,
        "Forewarning": 1,
        "All-Seeing": 2,
        "Lifeline": 2,
        "Victory Foretold": 2,
        "Omniscience": 3,
        "Focused Insights": 3
      }
    },
    "Bard": {
      "archetype": "Healer",
      "items": [
        "Traveler's Blade",
        "Lute"
      ],
      "skills": {
        "Song of Mending": 0,
        "Dissonance": 1,
        "Understudy": 1,
        "Peaceful Rest": 1,
        "Concentration": 2,
        "Aria of War": 2,
        "Rehearsal": 2,
        "Wayfarer": 3,
        "Cacophony": 3
      }
    }
  },
  "overlord": {
    "start": [
      "Basic Deck"
    ],
    "skills": {
      // basic deck 1
      "Basic I: Critical Blow": 0,
      "Basic I: Dark Charm": 0,
      "Basic I: Dark Fortune": 0,
      "Basic I: Dark Might": 0,
      "Basic I: Dash": 0,
      "Basic I: Frenzy": 0,
      "Basic I: Pit Trap": 0,
      "Basic I: Poison Dart": 0,
      "Basic I: Tripwire": 0,
      "Basic I: Word of Misery": 0,
      // basic deck 2
      "Basic II: Befuddle": 0,
      "Basic II: Blinding Speed": 0,
      "Basic II: Dirty Fighting": 0,
      "Basic II: Flurry": 0,
      "Basic II: Grease Trap": 0,
      "Basic II: Mental Error": 0,
      "Basic II: Mimic": 0,
      "Basic II: Overwhelm": 0,
      "Basic II: Reflective Ward": 0,
      "Basic II: Sign of Weakness": 0,
      "Basic II: Uncontrolled Power": 0
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
          { scenario: "A Fat Goblin", winner: "heroes", count: [0, 0] }
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
          { scenario: "Castle Daerion", winner: "heroes", count: [0, 0] }
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
          { scenario: "The Cardinal's Plight", winner: "heroes", count: [0, 0] }
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
          { scenario: "The Masquerade Ball", winner: "heroes", count: [0, 0] }
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
          { scenario: "Death on the Wing", winner: "heroes", count: [0, 0] }
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
    },
    "Labyrinth of Ruin": {
      // intro
      "Ruinous Whispers": {
        act: "Intro"
      },
      // act 1
      "Gathering Foretold": {
        act: "Act 1",
        valid: [
          { scenario: "Ruinous Whispers", winner: "any", count: [1, 1] },
          { act: "Act 1", winner: "any", count: [0, 0] }
        ]
      },
      "Honor Among Thieves": {
        act: "Act 1",
        valid: [
          { scenario: "Ruinous Whispers", winner: "any", count: [1, 1] },
          { act: "Act 1", winner: "any", count: [0, 0] }
        ]
      },
      "Reclamation": {
        act: "Act 1",
        valid: [
          { scenario: "Gathering Foretold", winner: "any", count: [1, 1] },
          { scenario: "Fury of the Tempest", winner: "any", count: [0, 0] }
        ]
      },
      "Barrow of Barris": {
        act: "Act 1",
        valid: [
          { scenario: "Honor Among Thieves", winner: "any", count: [1, 1] },
          { scenario: "Fury of the Tempest", winner: "any", count: [0, 0] }
        ]
      },
      "Fury of the Tempest": {
        act: "Act 1",
        valid: [
          { act: "Act 1", winner: "any", count: [1, 1] },
          { scenario: "Gathering Foretold", winner: "any", count: [1, 1] },
          { scenario: "Reclamation", winner: "any", count: [0, 0] },
          { scenario: "Barrow of Barris", winner: "any", count: [0, 0] }
        ]
      },
      "Through the Mist": {
        act: "Act 1",
        valid: [
          { act: "Act 1", winner: "any", count: [2, 2] },
          { scenario: "Gathering Foretold", winner: "any", count: [1, 1] },
          { scenario: "Back from the Dead", winner: "any", count: [0, 0] }
        ]
      },
      "Secrets in Stone": {
        act: "Act 1",
        valid: [
          { act: "Act 1", winner: "any", count: [2, 2] },
          { scenario: "Honor Among Thieves", winner: "any", count: [1, 1] },
          { scenario: "Back from the Dead", winner: "any", count: [0, 0] }
        ]
      },
      "Back from the Dead": {
        act: "Act 1",
        valid: [
          { act: "Act 1", winner: "any", count: [2, 2] },
          { scenario: "Gathering Foretold", winner: "any", count: [1, 1] },
          { scenario: "Through the Mist", winner: "any", count: [0, 0] },
          { scenario: "Secrets in Stone", winner: "any", count: [0, 0] }
        ]
      },
      // interlude
      "Pilgrimage": {
        act: "Interlude",
        valid: [
          { act: "Act 1", winner: "any", count: [3, 3] },
          { act: "Interlude", winner: "any", count: [0, 0] }
        ]
      },
      "Fortune and Glory": {
        act: "Interlude",
        valid: [
          { act: "Act 1", winner: "any", count: [3, 3] },
          { act: "Interlude", winner: "any", count: [0, 0] }
        ]
      },
      // act 2
      "Heart of the Wilds": {
        act: "Act 2",
        valid: [
          { act: "Interlude", winner: "any", count: [1, 1] },
          { act: "Act 2", winner: "any", count: [0, 2] }
        ]
      },
      "Fountain of Insight": {
        act: "Act 2",
        valid: [
          { act: "Interlude", winner: "any", count: [1, 1] },
          { act: "Act 2", winner: "any", count: [0, 2] }
        ]
      },
      "Web of Power": {
        act: "Act 2",
        valid: [
          { act: "Interlude", winner: "any", count: [1, 1] },
          { act: "Act 2", winner: "any", count: [0, 2] }
        ]
      },
      "Let the Truth be Buried": {
        act: "Act 2",
        valid: [
          { act: "Interlude", winner: "any", count: [1, 1] },
          { act: "Act 2", winner: "any", count: [0, 2] }
        ]
      },
      "Fire and Brimstone": {
        act: "Act 2",
        valid: [
          { act: "Interlude", winner: "any", count: [1, 1] },
          { act: "Act 2", winner: "any", count: [0, 2] }
        ]
      },
      "Tipping the Scales": {
        act: "Act 2",
        valid: [
          { act: "Interlude", winner: "any", count: [1, 1] },
          { act: "Act 2", winner: "any", count: [0, 2] }
        ]
      },
      // finale
      "Endless Night": {
        act: "Finale",
        valid: [
          { act: "Act 2", winner: "any", count: [3, 3] },
          { act: "Finale", winner: "any", count: [0, 0] }
        ]
      },
      "A Glimmer of Hope": {
        act: "Finale",
        valid: [
          { act: "Act 2", winner: "any", count: [3, 3] },
          { act: "Finale", winner: "any", count: [0, 0] }
        ]
      }
    }
  }
};