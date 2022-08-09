import {Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import CoolStorage from "../util/CoolStorage";


const story = [
    "Let me tell you a story (tap to continue).",
    "Once upon a time, there lived a man in a village near the Kingdom of Bilpart",
    "He practiced every day to become a legendary swordsman; however...",
    "The time of peace he had been used to would soon come to an end.",
    "One day, he was invited to the capital to represent the people of his village.",
    "As he set off on his journey, the village's only source of protection from monsters would be gone for several days.",
    "\"We'll be fine,\"  The villagers insisted, \"please, go on.\"",
    "On his day-long trip to the castle, he slept in the back of the carriage that was being pulled by magic.",
    "When he awoke, he found himself in a strange environment.",
    "The environment he awoke to was filled with strange black dust-like particles.  The surrounding environment had a dark purple tint.",
    "The air around him was perfectly still, and the only sound he could hear was the sound of his own breathing.",
    "He looked outside the carriage and saw a large castle in the distance; however...",
    "There were no guards posted at the castle.  No-one wandering around, just the swordsman and his now-still carriage.",
    "He had seen the castle years before, but the current state of the castle had changed dramatically.",
    "It seemed as if the castle had been abandoned for centuries with moss and lichen covering the walls.",
    "He pulled out his sword and began to walk towards the castle, his heart beating harder than it ever had before.",
    "As he moved away from his carriage, he saw a large, black, swirling cloud in the distance.",
    "The cloud had a center that looked like an upside-down tornado.",
    "\"Could that be a portal?\"  The swordsman thought.",
    "He slowly walked towards the castle.",
    "Suddenly, he heard a loud rumble.",
    "\"Who's there?\"  The swordsman gasped.",
    "His carriage had lost its magic and started rolling away from the castle.",
    "The swordsman tried to run towards the carriage, but he lost sight of it, almost as if it had vanished into thin air.",
    "He couldn't see more than a mile away from him.  The light forest that had normally been safe to walk through was covered with thick fog.",
    "While he was thought of by the villagers to be the bravest man in the village, he trembled as the portal above him started to swirl faster.",
    
    //25: purple background
    "The storm wasn't making any sound.  All he could hear was his own heartbeat, breathing, and walking.",
    "The surrounding fog got thicker, and he was starting to lose sight of the castle.",
    "Trying to escape the fog, he went inside the castle.  The interior of the castle was covered in moss and decayed to a point where no-one would step foot in the building.",
    "While it looked like a place where mice would run rampant, there was no sign of life anywhere.",
    "He went further into the castle to escape the fog.  While further in there was no fog, the black square particles looming around in the air still persisted.",
    "The swordsman tried grabbing one of these particles, but his hand phased through it.",
    "He noticed something about the particles.  They were going up; not only that, but they were losing their corners the higher they got.",
    "He ran upstairs.  The swordsman knew where certain rooms in the castle were.",
    "The higher up he went, the more and more the particles looked like circles.",
    "Almost at the top floor of the castle, he looked out one of the broken windows.",
    "He saw something through the fog...",
    
    //36 music
    "What he saw wasn't human, but it was definitely living.",
    "It had scales the size of shields, no eyes, and a large mouth.",
    "It started to approach the castle.  As it did, our swordsman knew he was outmatched.",
    "\"Did this beast cause this?\"  The swordsman thought.  \"If it did, what chance do I have of defeating it?\"",
    "Suddenly, the beast launched itself hundreds of feed towards the castle.  Its arms were the size of the drawbridge, and its tail was longer than the castle is tall.",
    "Its hand had reached into the floor the swordsman was on; however, the decrepit floor did not give out.",
    "The beast stuck its head into the building.  It looked at the swordsman and told it telepathically,\n\"You must go into the portal.\"",
    "Our swordsman asked why, but the beast insisted.",
    "He went onto the nose of the beast, and the beast launched him into the portal.",
    "\"I feel like I can trust this beast,\" the swordsman thought, \"even if it isn't human, something about it seems human-like.\"",
    "The swordsman fell unconscious, and when he woke up, he didn't have his sword, but his phone.",
    "He had fallen asleep attempting to press a Copy button on some app 1,000 times.",
    "He looked at the user.",
    "You.",
    "...",
    "You are the one he stared into, the man who stared from the Copy button.",
    "...",
    "Copied to clipboard!",
];

export default function EasterEggScreen() {
    
    const [incr, setIncr] = useState(0);
    const [opacity, setOpacity] = useState(255);
    const [canTap, setCanTap] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState("#10003600");
    
    async function fadeOut() {
        //fade out the styles.text.color opacity overtime
        
        for(let i = 255; i > 0; i = i - 5) {
            await new Promise(r => setTimeout(r, 1));
            setOpacity(i);
        }
    }
    
    async function fadeIn() {
        //fade in
        
        for(let i = 0; i < 255; i = i + 5) {
            await new Promise(r => setTimeout(r, 1));
            setOpacity(i);
        }
    }
    
    async function raiseBackgroundOpacity() {
        
        for(let i = 0; i < 255; i++) {
            await new Promise(r => setTimeout(r, 1));
            setBackgroundColor(backgroundColor.substring(0, backgroundColor.length - 2) + i.toString(16));
        }
    }
    
    async function lowerBackgroundOpacity() {
        for(let i = 255; i > 0; i--) {
            await new Promise(r => setTimeout(r, 1));
            setBackgroundColor(backgroundColor.substring(0, backgroundColor.length - 2) + i.toString(16));
        }
    }
    
    return (
        <TouchableHighlight style={styles.background} onPress={() => {
            if(!canTap) return;
            
            setCanTap(false);
            fadeOut().then(() => {
                setIncr(incr + 1);
                console.log(`incr: ${incr}`);
                
                if(!story[incr]) {
                    setCanTap(false);
                    lowerBackgroundOpacity().then(() => {
                        CoolStorage.easter_egg_time = false;
                    });
                }
                
                if(incr === 25) {
                    raiseBackgroundOpacity().then(() => {
                        fadeIn().then(() => {
                            setCanTap(true);
                        });
                    });
                    return;
                }
                
                fadeIn().then(() => {
                    setCanTap(true);
                });
            })
        }}>
            <View style={
                {
                    backgroundColor: backgroundColor,
                    width: "100%",
                    height: "100%",
                    alignContent: "center",
                    justifyContent: "center",
                }
            }>
                <Text style={
                    {
                        color: "#ffffff",
                        textAlign: "center",
                        fontSize: 32,
                        opacity: opacity / 255,
                    }
                }>
                    {story[incr]}
                </Text>
            </View>
        </TouchableHighlight>
    )
    
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#000000",
        width: "100%",
        height: "100%",
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    text: {
    },
});
