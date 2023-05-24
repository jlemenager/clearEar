const synth = new Tone.AMSynth().toDestination();
const now = Tone.now()

//Vars for INPUT AND BUTTONS

const input = document.querySelector('input')
let displayNote =  document.querySelector('#display-note')

//Vars for HUMAN EARS
const allNotes = ["C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5"]
const colors = ['blue','indigo','green','lightgreen','lavender','purple','pink','lightpink','red','brown','orange','yellow']

const humanEars = document.querySelector('#human-ears')
const gameMode = document.querySelector('.game-mode')
const humanEarsParagraph = document.querySelector('#human-ears-paragraph')

//Vars for BUSHBABY EARS and ELEPHANT EARS
const bushbabyEars = document.querySelector('#bushbaby-ears')
const bushbabyEarsParagraph = document.querySelector('#bushbaby-ears-paragraph')

const elephantEars = document.querySelector('#elephant-ears')
const elephantEarsParagraph = document.querySelector('#elephant-ears-paragraph')

const c = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"]
const cSharp = ["C#4", "D#4", "F4", "F#4", "G#4", "A#4", "C4"]
const d = ["D4", "E4", "F#4", "G4", "A4", "B4", "C#4"]
const dSharp = ["D#4", "F4", "G4", "G#4", "A#4", "C4", "D4"]
const e = ["E4", "F#4", "G#4", "A4", "B4", "C#4", "D#4"]
const f = ["F4", "G4", "A4", "A#4", "C4", "D4", "E4"]
const fSharp = ["F#4", "G#4", "A#4", "B4", "C#4", "D#4", "E#4"]
const g = ["G4", "A4", "B4", "C4", "D4", "E4", "F#4"]
const gSharp = ["G#4", "A#4", "C4", "C#4", "D#4", "F4", "G4"]
const a = ["A4", "B4", "C#4", "D4", "E4", "F#4", "G#4"]
const aSharp = ["A#4", "C4", "D4", "D#4", "F4", "G4", "A4"]
const b = ["B4", "C#4", "D#4", "E4", "F#4", "G#4", "A#4"]

const key = [c,cSharp,d,dSharp,e,f,fSharp,g,gSharp,a,aSharp,b]

//FUNCTIONS
const playHumanEar = async () =>{
    await Tone.start() 
    let randomNote = Math.round(Math.random()*35)
    let randomColor = Math.round(Math.random()*11)
    if(document.querySelector('#play-sound').innerText === 'Play Note'){
    synth.triggerAttack(allNotes[randomNote], "4n", now)
    displayNote.innerText = allNotes[randomNote]
    document.querySelector('#color-display').style.backgroundColor = colors[randomColor]
    document.querySelector('#check').style.color = 'black'
    document.querySelector('#display-result').style.opacity = 0
    document.querySelector('#display-note').style.opacity = 0
    input.value = ''
    console.log('asdf')
    }
}

const checkIfCorrectHumanEar = () =>{
document.querySelector('#check-button').addEventListener('click', ()=>{
    
    if (input.value === displayNote.innerText){
        document.querySelector('#display-result').innerHTML = 'Correct!'
        document.querySelector('#check-display').style.color = 'green'
    } else {
        document.querySelector('#display-result').innerHTML = 'Try Again'
        document.querySelector('#check-display').style.color = 'red'
    }
        document.querySelector('#display-result').style.opacity = 1
        document.querySelector('#display-note').style.opacity = 1
})
}

const humanEarFunction = () =>{
    playHumanEar()
    checkIfCorrectHumanEar()
    stopPlaying()
}
const playBushBabyEar = async () => {
    await Tone.start()
    synth.sync()
    let randomKey = Math.round(Math.random()*11)
    displayNote.innerText = key[randomKey][0]
    synth.triggerAttackRelease(key[randomKey][0], '4n', now)
    synth.triggerAttackRelease(key[randomKey][Math.round(Math.random()*6)], '4n', now+1)
    synth.triggerAttackRelease(key[randomKey][Math.round(Math.random()*6)], '4n', now+2)
    synth.triggerAttackRelease(key[randomKey][Math.round(Math.random()*6)], '4n', now+3)
    synth.triggerAttackRelease(key[randomKey][Math.round(Math.random()*6)], '4n', now+4)
    synth.triggerAttackRelease(key[randomKey][Math.round(Math.random()*6)], '4n', now+5)
    synth.triggerAttackRelease(key[randomKey][0], '4n', now+6)
    Tone.Transport.start()
    //Shoutout to Tylus
}


const playElephantEar = async () => {
    await Tone.start()
    synth.sync()
    let randomKey = Math.round(Math.random()*11)
    displayNote.innerText = key[randomKey][0]
    synth.triggerAttackRelease(key[randomKey][Math.round(Math.random()*6)], '4n', now)
    synth.triggerAttackRelease(key[randomKey][Math.round(Math.random()*6)], '4n', now+1)
    synth.triggerAttackRelease(key[randomKey][Math.round(Math.random()*6)], '4n', now+2)
    synth.triggerAttackRelease(key[randomKey][Math.round(Math.random()*6)], '4n', now+3)
    synth.triggerAttackRelease(key[randomKey][Math.round(Math.random()*6)], '4n', now+4)
    synth.triggerAttackRelease(key[randomKey][Math.round(Math.random()*6)], '4n', now+5)
    synth.triggerAttackRelease(key[randomKey][Math.round(Math.random()*6)], '4n', now+6)
    Tone.Transport.start()
    //Shoutout to Tylus
}

const playColorSlide = () => {
    let randomColor = Math.round(Math.random()*11)
    document.querySelector('#color-display').style.display = 'none'
    document.querySelector('#scale-colors').style.display = 'block'
    document.querySelector('.seven').setAttribute('style', `animation-name:slide; background-color:${colors[randomColor]};`)
    document.querySelector('.six').setAttribute('style', `animation-name:slide; background-color:${colors[randomColor]};`)
    document.querySelector('.five').setAttribute('style', `animation-name:slide; background-color:${colors[randomColor]};`)
    document.querySelector('.four').setAttribute('style', `animation-name:slide; background-color:${colors[randomColor]};`)
    document.querySelector('.three').setAttribute('style', `animation-name:slide; background-color:${colors[randomColor]};`)
    document.querySelector('.two').setAttribute('style', `animation-name:slide; background-color:${colors[randomColor]};`)
    document.querySelector('.one').setAttribute('style', `animation-name:slide; background-color:${colors[randomColor]};`)
    //https://www.techiedelight.com/add-css-property-javascript/
}

const stopColorSlide = () => {
    document.querySelector('.seven').removeProperty('animation-name')
    document.querySelector('.six').removeProperty('animation-name')
    document.querySelector('.five').removeProperty('animation-name')
    document.querySelector('.four').removeProperty('animation-name')
    document.querySelector('.three').removeProperty('animation-name')
    document.querySelector('.two').removeProperty('animation-name')
    document.querySelector('.one').removeProperty('animation-name')
    //https://stackoverflow.com/questions/2027935/how-to-remove-css-property-using-javascript
}

const checkIfCorrect = () => {
    document.querySelector('#check-button').addEventListener('click', ()=>{
        if(input.value === displayNote.innerText){
            document.querySelector('#display-result').innerHTML = 'Correct!'
            document.querySelector('#check-display').style.color = 'green'
        } else {
            document.querySelector('#display-result').innerHTML = 'Try Again'
            document.querySelector('#check-display').style.color = 'red'
        }
        document.querySelector('#display-result').style.opacity = 1
        document.querySelector('#display-note').style.opacity = 1
    })
}

const stopPlaying = async() =>{
    await Tone.start()
    document.querySelector('#stop-sound').addEventListener('click',()=>{
    synth.triggerRelease()
    })
}

const reset = () =>{
    document.querySelector('#reset').style.display = 'inline'
    document.querySelector('#reset').addEventListener('click',()=>{
    location.reload()
    })
    document.querySelector('#play-sound').style.display = 'inline'
    document.querySelector('#stop-sound').style.display = 'inline'
}

const bushbabyEarFunction = () => {
    playColorSlide()
    playBushBabyEar()
    checkIfCorrect()
    stopPlaying()
}

const elephantEarFunction = () =>{
    playColorSlide()
    playElephantEar()
    checkIfCorrect()
    stopPlaying()
}

//EVENT LISTENERS

humanEars.addEventListener('click', ()=>{
    let bgColor = window.getComputedStyle(humanEars).backgroundColor
    //https://stackoverflow.com/questions/71815150/console-log-of-backgroundcolor-shows-instead-of-the-color-value
    console.log(bgColor)
    document.querySelector('#play-sound').innerText = 'Play Note'
    document.querySelector('#stop-sound').innerText = 'Stop Playing'
    if (bgColor=='rgb(131, 92, 62)'){
    synth.triggerRelease()
    input.placeholder = 'Guess the Note...'
    humanEars.style.backgroundColor = '#AD825D'
    humanEarsParagraph.style.color = '#835C3E'
    bushbabyEars.style.backgroundColor = '#835C3E'
    bushbabyEarsParagraph.style.color = '#AD825D'
    elephantEars.style.backgroundColor = '#835C3E'
    elephantEarsParagraph.style.color = '#AD825D'
    document.querySelector('#play-sound').style.display = 'inline'
    document.querySelector('#stop-sound').style.display = 'inline'
    document.querySelector('#reset').style.display = 'none'
    document.querySelector('#color-display').style.display = 'block'
    document.querySelector('#color-display').style.opacity = 1
    document.querySelector('#check-display').style.opacity = 1
    document.getElementById('scale-colors').style.display = 'none'
    document.querySelector('#play-sound').removeEventListener('click', elephantEarFunction)
    document.querySelector('#play-sound').removeEventListener('click', bushbabyEarFunction)
    document.querySelector('#play-sound').addEventListener('click', humanEarFunction)
    } else if (bgColor=='rgb(173, 130, 93)'){
    location.reload()
    humanEars.style.backgroundColor = '#835C3E'
    humanEarsParagraph.style.color = '#AD825D'
    document.querySelector('#play-sound').style.display = 'none'
    document.querySelector('#stop-sound').style.display = 'none'
    document.querySelector('#reset').style.display = 'none'
    document.querySelector('#color-display').style.opacity = 0
    document.querySelector('#check-display').style.opacity = 0
    humanEars.onmouseenter = ()=>{
        humanEars.style.width = '280px' 
        humanEars.style.transition = 'all 1.2s ease'
    }
    humanEars.onmouseleave = ()=>{
        humanEars.style.width = '230px' 
        humanEars.style.transition = 'all 1.2s ease'
    }
    //https://stackoverflow.com/questions/714655/how-can-i-set-a-css-hover-on-a-dom-created-element-in-javascript
    console.log('asdfsd')
    }
})

bushbabyEars.addEventListener('click',()=>{
    let bgColor = window.getComputedStyle(bushbabyEars).backgroundColor
    //https://stackoverflow.com/questions/71815150/console-log-of-backgroundcolor-shows-instead-of-the-color-value
    console.log(bgColor)
    if (bgColor=='rgb(131, 92, 62)'){
    synth.triggerRelease()
    input.placeholder = 'Guess the Key...'
    bushbabyEars.style.backgroundColor = '#AD825D'
    bushbabyEarsParagraph.style.color = '#835C3E'
    elephantEars.style.backgroundColor = '#835C3E'
    elephantEarsParagraph.style.color = '#AD825D'
    humanEars.style.backgroundColor = '#835C3E'
    humanEarsParagraph.style.color = '#AD825D'
    document.querySelector('#play-sound').innerText = 'Play Notes'
    document.querySelector('#play-sound').style.display = 'inline'
    document.querySelector('#stop-sound').style.display = 'inline'
    document.querySelector('#color-display').style.display = 'block'
    document.querySelector('#color-display').style.opacity = 0
    reset()
    document.querySelector('#play-sound').removeEventListener('click', humanEarFunction)
    document.querySelector('#play-sound').removeEventListener('click', elephantEarFunction)
    document.querySelector('#play-sound').addEventListener('click', bushbabyEarFunction)
} else if (bgColor=='rgb(173, 130, 93)'){
    location.reload()
    bushbabyEars.style.backgroundColor = '#835C3E'
    bushbabyEarsParagraph.style.color = '#AD825D'
    document.querySelector('#color-display').style.display = 'block'
    document.querySelector('#color-display').style.opacity = 0
    document.querySelector('#play-sound').style.display = 'none'
    document.querySelector('#stop-sound').style.display = 'none'
    document.querySelector('#reset').style.display = 'none'
    document.getElementById('scale-colors').style.display = 'none'
    bushbabyEars.onmouseenter = ()=>{
        bushbabyEars.style.width = '280px' 
        bushbabyEars.style.transition = 'all 1.2s ease'
    }
    bushbabyEars.onmouseleave = ()=>{
        bushbabyEars.style.width = '230px' 
        bushbabyEars.style.transition = 'all 1.2s ease'
    }
}
})

elephantEars.addEventListener('click', ()=>{
    let bgColor = window.getComputedStyle(elephantEars).backgroundColor
    //https://stackoverflow.com/questions/71815150/console-log-of-backgroundcolor-shows-instead-of-the-color-value
    console.log(bgColor)
    if (bgColor=='rgb(131, 92, 62)'){
    synth.triggerRelease()
    input.placeholder = 'Guess the Key...'
    elephantEars.style.backgroundColor = '#AD825D'
    elephantEarsParagraph.style.color = '#835C3E'
    humanEars.style.backgroundColor = '#835C3E'
    humanEarsParagraph.style.color = '#AD825D'
    bushbabyEars.style.backgroundColor = '#835C3E'
    bushbabyEarsParagraph.style.color = '#AD825D'
    document.querySelector('#play-sound').innerText = 'Play Notes'
    document.querySelector('#play-sound').style.display = 'inline'
    document.querySelector('#stop-sound').style.display = 'inline'
    document.querySelector('#color-display').style.display = 'block'
    document.querySelector('#color-display').style.opacity = 0
    reset()
    document.querySelector('#play-sound').removeEventListener('click', humanEarFunction)
    document.querySelector('#play-sound').removeEventListener('click', bushbabyEarFunction)
    document.querySelector('#play-sound').addEventListener('click', elephantEarFunction)

} else if (bgColor=='rgb(173, 130, 93)'){
    location.reload()
    elephantEars.style.backgroundColor = '#835C3E'
    elephantEarsParagraph.style.color = '#AD825D'
    document.querySelector('#color-display').style.display = 'block'
    document.querySelector('#color-display').style.opacity = 0
    document.querySelector('#play-sound').style.display = 'none'
    document.querySelector('#stop-sound').style.display = 'none'
    document.querySelector('#reset').style.display = 'none'
    document.getElementById('scale-colors').style.display = 'none'
    elephantEars.onmouseenter = ()=>{
        elephantEars.style.width = '280px' 
        elephantEars.style.transition = 'all 1.2s ease'
    }
    elephantEars.onmouseleave = ()=>{
        elephantEars.style.width = '230px' 
        elephantEars.style.transition = 'all 1.2s ease'
    }
}
})


