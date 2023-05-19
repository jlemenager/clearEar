import * as Tone from 'tone'

const synth = new Tone.Synth().toDestination();
const now = Tone.now()

document.querySelector('button').addEventListener('click', async ()=> {
    await Tone.start()
    synth.triggerAttackRelease('C4', '8n', now)
})