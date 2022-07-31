const data = {
    "raids": {
        "Naxx": {
            "bosses": {
                "Anub'Rekhan": {
                    "intro": "Anub\'Rekhan, one of the finest Spider Lords of Azjol\'Nerub, was brought under control of the Scourge when he and his commander, Anub\'Arak, were finally defeated by the Lich King many years ago. It is said he was the most loyal of Anub\'Arak\'s commanders.",
                    "overview": "Anub\'Rekhan will begin the fight with 1 Guard (2 on 25 man), throughout the fight Anub\'rekhan will summon more Crypt Guards and has the ability to summon Scarabs from corpses of Guards (10 per corpse) and Players (5 per corpse). Occasionally the boss will cast Locust Swarm, slowing his own movement speed to 60% (75% on 25 man) and silencing all players affected and dealing a stacking debuff dealing around 900-1100 damage per stack (1350-1700 damage per stack on 25). The boss randomly casts impales on a random player knocking the player and all players behind up taking damage from the hit and reduced falldamage upon landing.",
                    "tactics": {
                        "normal": {
                            "dps": "Melee: Start the fight cleaving the adds down with the boss, you want to position away from the tanks, but on the side of the boss with no ranged behind you. The boss occasionally impales a random player and knocks them and all players behind them dealing moderate physical damage. Shortly (around 5-10 seconds) prior to locust swarm you want to move away from the boss in an effort to reduce the damage taken from the stacks and not be silenced, wait in the middle of the room with the ranged until the boss has been repositioned / the cast has finished and continue dps on the boss. Ranged: Start the fight spread around the middle of the room, you want to make sure the minimum amount of people are hit by impale as possible. Focus the boss and cleave the guards down on pull, you may have to clear scarabs up as they run around the room. When locust swarm occurs stand in the middle of the room to avoid taking damage and silence from the debuff. When the cast finishes continue dpsing the boss.",
                            "healers": "Healers have a simple task on this fight, there is minimal damage aside from impales and poorly executed locust swarm phases, maintain the tanks health especially if they are tanking multiple guards and the boss, try to keep people topped after taking damage from impales as they will take additional damage when falling also. Locust Swarm phases normally relies on the tank to execute correctly, healers should be stood in the center circle healing anyone who has stacks. A healer can attempt to stay ahead of the tanks path to try and heal the tank from stack damage whilst being out of range of the locust swarm itself.",
                            "tanks": "The MT on this fight should aim to tank Anub\'Rekhan in doorway he stands in, ideally facing one of the corners, allowing melee to be stood in the other corner and giving range the maximum distance and space to avoid impale damage as possible. The OT should pickup the guards and tank them near the boss in order to be cleaved on and then pickup as many scarabs as possible. This can be solo tanked if the MT feels comfortable, in this case try to aoe the scarabs as they spawn but ignore them otherwise and potentially use a defensive on pull. When locust swarm is around 5 seconds away, prepare to move the boss to the outer edge of the room and being running, any movement increases are advised but you don\'t want to move to far ahead that the boss cuts the corner to try and catch you. Keeping the boss on the outer edge will stop any player in the middle of the room from taking stacks. As you arrive at the opposite doorway the boss should just be finishing his cast and you can reposition the boss as you did at the start of the fight.",
                        },
                        "heroic": {
    
                        }
                    }
                },
                "Grand_Widow_Faerlina": {
                    "intro": "Anub\'Rekhan, one of the finest Spider Lords of Azjol\'Nerub, was brought under control of the Scourge when he and his commander, Anub\'Arak, were finally defeated by the Lich King many years ago. It is said he was the most loyal of Anub\'Arak\'s commanders.",
                    "overview": "Anub\'Rekhan will begin the fight with 1 Guard (2 on 25 man), throughout the fight Anub\'rekhan will summon more Crypt Guards and has the ability to summon Scarabs from corpses of Guards (10 per corpse) and Players (5 per corpse). Occasionally the boss will cast Locust Swarm, slowing his own movement speed to 60% (75% on 25 man) and silencing all players affected and dealing a stacking debuff dealing around 900-1100 damage per stack (1350-1700 damage per stack on 25). The boss randomly casts impales on a random player knocking the player and all players behind up taking damage from the hit and reduced falldamage upon landing.",
                    "tactics": {
                        "normal": {
                            "dps": "Test1",
                            "healers": "Healers have a simple task on this fight, there is minimal damage aside from impales and poorly executed locust swarm phases, maintain the tanks health especially if they are tanking multiple guards and the boss, try to keep people topped after taking damage from impales as they will take additional damage when falling also. Locust Swarm phases normally relies on the tank to execute correctly, healers should be stood in the center circle healing anyone who has stacks. A healer can attempt to stay ahead of the tanks path to try and heal the tank from stack damage whilst being out of range of the locust swarm itself.",
                            "tanks": "The MT on this fight should aim to tank Anub\'Rekhan in doorway he stands in, ideally facing one of the corners, allowing melee to be stood in the other corner and giving range the maximum distance and space to avoid impale damage as possible. The OT should pickup the guards and tank them near the boss in order to be cleaved on and then pickup as many scarabs as possible. This can be solo tanked if the MT feels comfortable, in this case try to aoe the scarabs as they spawn but ignore them otherwise and potentially use a defensive on pull. When locust swarm is around 5 seconds away, prepare to move the boss to the outer edge of the room and being running, any movement increases are advised but you don\'t want to move to far ahead that the boss cuts the corner to try and catch you. Keeping the boss on the outer edge will stop any player in the middle of the room from taking stacks. As you arrive at the opposite doorway the boss should just be finishing his cast and you can reposition the boss as you did at the start of the fight.",
                        },
                        "heroic": {
    
                        }
                    }
                },
                "Maexxna": {

                },
                "Noth_the_Plaguebringer": {

                },
                "Heigan_the_Unclean": {

                },
                "Loatheb": {

                },
                "Instructor_Razuvious": {

                },
                "Gothik_the_Harvester": {

                },
                "The_Four_Horseman": {

                },
                "Patchwerk": {

                },
                "Grobbulus": {

                },
                "Gluth": {

                },
                "Thaddius": {

                },
                "Sapphiron": {

                },
                "Kel'Thuzad": {

                }
            },
            "extra": {

            }
        },
        "OS": {

        },
        "EoE": {

        },
        "VoA": {

        },
        "Ulduar": {

        },
        "ToC": {

        },
        "Onyxia": {

        },
        "ICC": {

        },
        "RS": {

        }
    },
    "dungeons": {

    }
}

const raidName = 'Naxx'
const raidData = data.raids[raidName]

function addRaidImage () {
    const raidImage = document.getElementById('raidImageWrapper')
    const raidTitle = document.getElementById('raidTitle')
    const titleText = document.createTextNode(raidName.replace(/_/g, ' '))
    const div = document.createElement('div')

    var img = document.createElement("img")
        img.setAttribute('src', './images/bosses/' + raidName + '/' + raidName + '.webp')
        img.setAttribute('height', '85px')
        img.setAttribute('width', '85px')

    img.classList.add('raidImage')
    div.classList.add('raidTitlePadding')
    raidTitle.appendChild(titleText)
    raidTitle.appendChild(div)
    raidImage.appendChild(img)
}

function buildBossList () {
    const bosses = Object.keys(data.raids[raidName].bosses)
    const element = document.getElementById('leftComponent')

    bosses.map(boss => {
        const div = document.createElement('div')
        const text = document.createTextNode(boss.replace(/_/g, ' '))
        var img = document.createElement("img")
        img.setAttribute('src', './images/bosses/' + raidName + '/' + boss + '.webp')
        img.setAttribute('height', '85px')
        img.setAttribute('width', '85px')

        div.appendChild(img)
        div.appendChild(text)
        div.classList.add('bossDiv')
        img.classList.add('bossImage')
        div.addEventListener("click", () => handleBossClick(boss))
        element.appendChild(div)
    })
}

function handleBossClick (boss) {
    const raidImage = document.getElementById('raidImageWrapper')
    const bossGuide = document.getElementById('bossGuideWrapper')
    const bossTitle = document.getElementById('bossTitle')
    const titleText = document.createTextNode(boss.replace(/_/g, ' '))
    
    raidImage.style.display = 'none'
    bossGuide.style.display = 'block'
    bossTitle.innerHTML = ''
    bossTitle.appendChild(titleText)

    const intro = document.getElementById('intro')
    const overview = document.getElementById('overview')
    const introText = document.createTextNode(raidData.bosses[boss].intro)
    const overviewText = document.createTextNode(raidData.bosses[boss].overview)

    intro.innerHTML = ''
    intro.appendChild(introText)
    overview.lastChild.remove()
    overview.appendChild(overviewText)

    Object.keys(raidData.bosses[boss].tactics.normal).forEach(tactic => {
        const element = document.getElementById(tactic)
        const div = document.createElement('div')
        const elementText = document.createTextNode(raidData.bosses[boss].tactics.normal[tactic])
        const test = boss + '-' + tactic + '-tactics'

        element.lastChild.remove()
        div.appendChild(elementText)
        div.setAttribute('id', boss + '-' + tactic + '-tactics')
        div.classList.add('roles')
        div.style.display = "none"

        element.addEventListener("click", () => {
            div.classList.toggle('show')
        })

        element.appendChild(div)
    })
}

// function handleBossClick (boss) {
//     const raidImage = document.getElementById('raidImageWrapper')
//     const bossGuide = document.getElementById('bossGuideWrapper')
//     const bossTitle = document.getElementById('bossTitle')
//     const titleText = document.createTextNode(boss.replace(/_/g, ' '))
    
//     raidImage.style.display = 'none'
//     bossGuide.style.display = 'block'
//     bossTitle.innerHTML = ''
//     bossTitle.appendChild(titleText)

//     const intro = document.getElementById('intro')
//     const overview = document.getElementById('overview')
//     const introText = document.createTextNode(raidData.bosses[boss].intro)
//     const overviewText = document.createTextNode(raidData.bosses[boss].overview)

//     intro.innerHTML = ''
//     intro.appendChild(introText)
//     overview.lastChild.remove()
//     overview.appendChild(overviewText)
    
//     if (raidData.bosses[boss].tactics === undefined) return

//     Object.entries(raidData.bosses[boss].tactics.normal).forEach(tactic => {
//         const [key, value] = tactic
//         console.log(tactic)
//         const element = document.getElementById(tactic[0])
//         const div = document.createElement('div')
//         console.log('22222: ', element)

//         if (typeof tactic[1] !== 'string') {
//             Object.entries(tactic[1]).forEach(entry => {
//                 console.log('aaaddaadad')
//                 const [key, value] = entry
//                 console.log('aaaaaa: ', value)
//                 const entryKey = document.createTextNode(key + ': ')
//                 const entryValue = document.createTextNode(value)
//                 const div = document.createElement('div')
//                 div.appendChild(entryKey)
//                 div.appendChild(entryValue)
//                 div.classList.add('roles')
//                 div.style.display = "none"
        
//                 element.addEventListener("click", () => {
//                     div.classList.toggle('show')
//                 })
        
//                 element.appendChild(div)
//             })
//         } else {
//             const elementText = document.createTextNode(value)

//             for (i = 0; element.childElementCount - 3; i++) {
//                 element.lastChild.remove()
//             }

//             div.appendChild(elementText)
//             div.setAttribute('id', boss + '-' + tactic + '-tactics')
//             div.classList.add('roles')
//             div.style.display = "none"

//             element.addEventListener("click", () => {
//                 div.classList.toggle('show')
//             })

//             element.appendChild(div)
//         }
//     })
// }

//const element = document.getElementById(tactic)
// const div = document.createElement('div')
// const tacticObj = raidData.bosses[boss].tactics.normal[tactic]
// console.log(tacticObj)

// if (tacticObj.length > 1) {
//     element.lastChild.remove()
//     Object.values(raidData.bosses[boss].tactics.normal[tactic]).forEach(value => {
//         const entryValue = document.createTextNode(value)
//         const div = document.createElement('div')
//         div.appendChild(entryValue)
//         div.setAttribute('id', boss + '-' + tactic + '-tactics')
//         div.classList.add('roles')
//         div.style.display = "none"

//         element.addEventListener("click", () => {
//             div.classList.toggle('show')
//         })

//         element.appendChild(div)
//         return
//     })
// } else {
//     const elementText = document.createTextNode(raidData.bosses[boss].tactics.normal[tactic])
//     element.lastChild.remove()
//     div.appendChild(elementText)

//     div.setAttribute('id', boss + '-' + tactic + '-tactics')
//     div.classList.add('roles')
//     div.style.display = "none"

//     element.addEventListener("click", () => {
//         div.classList.toggle('show')
//     })

//     element.appendChild(div)
// }