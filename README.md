# animatedTanks

Add the facilitators to the file you want to use them in. 
To use the facilitator, go to entity.js and add

            if (this.control.alt && this.onAlt) {
                this.onAlt(this, entities);
            }

after

        this.control.target = b.target == null ? this.control.target : b.target;
        this.control.goal = b.goal ? b.goal : { x: this.x, y: this.y };
        this.control.fire = b.fire ?? false;
        this.control.main = b.main ?? false;
        this.control.alt = b.alt ?? false;
        this.control.power = b.power == null ? 1 : b.power;

and add

        this.onAlt = set.ON_ALT || null;

after

        if (set.ALWAYS_ACTIVE != null) this.alwaysActive = set.ALWAYS_ACTIVE;
        if (set.MIRROR_MASTER_ANGLE != null) this.settings.mirrorMasterAngle = set.MIRROR_MASTER_ANGLE
        if (set.DRAW_HEALTH != null) this.settings.drawHealth = set.DRAW_HEALTH;
        if (set.DRAW_SELF != null) this.settings.drawShape = set.DRAW_SELF;
        if (set.DAMAGE_EFFECTS != null) this.settings.damageEffects = set.DAMAGE_EFFECTS;
        if (set.RATIO_EFFECTS != null) this.settings.ratioEffects = set.RATIO_EFFECTS;
        if (set.MOTION_EFFECTS != null) this.settings.motionEffects = set.MOTION_EFFECTS;

etc.
Then to make a tank animate, in the definition, add

        ON_ALT: (body) => animate(body, "tank class name(without the number at the back)", <frames>, reverse, <time between frames>)

do that for both states.
Then, to make the animation frames,

for ( let ii = 1; ii < 10; ii++ ) {
    let R1 = Math.floor((255 / 10) * ii)
    let R = R1.toString(16)
    let B1 = Math.floor((255 / 10) * (10 - ii))
    let B = B1.toString(16)
    Class["<tank name>" + ii] = {
        PARENT: "genericTank",
        LABEL: "anything",
        GUNS: [
        {
            POSITION: [0, 0, 0, 0, 0, 0, 0],
        },
        {
            POSITION: [14, 4, 1, 0, 0, 0, 0],
            PROPERTIES: {
                COLOR: `#${R}00${B}`
            }
        }
        ]
    }
}

Add more guns and use ii to change position values between frames.
