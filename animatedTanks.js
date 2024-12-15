
const animate = (me, baseName, frames, reverse, delay) => {
    if (reverse) {
            me.destroyAllChildren();
            for ( let i = frames - 1; i > -1; i-- ) {
                let multiplier = frames - i;
                setTimeout(() => {
                    me.define(Class[`${baseName}${i}`]);
                }, (multiplier - 1) * delay);
            }
    } else {
            me.destroyAllChildren();
            for ( let i = 1; i < frames + 1; i++ ) {
                setTimeout(() => {
                    me.define(Class[`${baseName}${i}`]);
                }, i * delay);
            }
        }
}
Class.speedPenta0 = {
    PARENT: "genericTank",
    LABEL: "Speed Penta",
    DANGER: 7,
    BODY: {
        SPEED: 0.85 * base.SPEED
    },
    ON_ALT: (body) => animate(body, "speedPenta", 10, false, 50),
    GUNS: [
        {
            POSITION: [16, 8, 1, 0, -3, -30, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 8, 1, 0, 3, 30, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, -2, -15, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, 2, 15, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [14, 4, 1, 0, 0, 0, 0],
            PROPERTIES: {
                COLOR: `#0000FF`
            }
        },
    ]
}
for ( let ii = 1; ii < 10; ii++ ) {
    let R1 = Math.floor((255 / 10) * ii)
    let R = R1.toString(16)
    let B1 = Math.floor((255 / 10) * (10 - ii))
    let B = B1.toString(16)
    Class["speedPenta" + ii] = {
        PARENT: "genericTank",
        LABEL: "Speed Penta",
        GUNS: [
        {
            POSITION: [16, 8, 1, 0, -3 + (ii * 0.3), -30 - (ii * 12), 0],
        },
        {
            POSITION: [16, 8, 1, 0, 3 - (ii * 0.3), 30 + (ii * 12), 0],
        },
        {
            POSITION: [19 - (ii * 0.5), 8, 1, 0, -2 + (ii * 0.3), -15 - (ii * 12.5), 0],
        },
        {
            POSITION: [19 - (ii * 0.5), 8, 1, 0, 2 - (ii * 0.3), 15 + (ii * 12.5), 0],
        },
        {
            POSITION: [22 - (ii * 0.4), 8, 1, 0, 0, 0, 0],
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
Class.speedPenta10 = {
    PARENT: "genericTank",
    LABEL: "Speed Penta", 
    ON_ALT: (body) => animate(body, "speedPenta", 10, true, 50),
    BODY: {
        HEALTH: base.HEALTH * 0.4,
        SHIELD: base.SHIELD * 0.4,
        DENSITY: base.DENSITY * 0.3
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }]),
                TYPE: "bullet",
                LABEL: "Front"
            }
        },
        {
            POSITION: [14, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster"
            }
        },
        {
            POSITION: [14, 8, 1, 0, 1, -140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster"
            }
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster"
            }
        },
        {
            POSITION: [16, 8, 1, 0, 0, -150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster"
            }
        },
        {
            POSITION: [14, 4, 1, 0, 0, 0, 0],
            PROPERTIES: {
                COLOR: `#FF0000`
            }
        },
    ]
}
Class.battery0 = {
    PARENT: "genericTank",
    LABEL: "Battery",
    DANGER: 6,
    ON_ALT: (body) => animate(body, "battery", 10, false, 50),
    GUNS: [
        {
            POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 3,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true
            }
        },
        {
            POSITION: [14, 4, 1, 0, 0, 0, 0],
            PROPERTIES: {
                COLOR: `#0000FF`
            }
        },
    ]
}
for ( let ii = 1; ii < 10; ii++ ) {
    let R1 = Math.floor((255 / 10) * ii)
    let R = R1.toString(16)
    let B1 = Math.floor((255 / 10) * (10 - ii))
    let B = B1.toString(16)
    Class["battery" + ii] = {
        PARENT: "genericTank",
        LABEL: "Battery",
        GUNS: [
        {
            POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
        },
        {
            POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
        },
        {
            POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
        },
        {
            POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
        },
        {
            POSITION: [6 - (ii * 0.3), 11 - (ii * 0.4), 1.3 + (ii * 0.04), 7 + (ii * 0.8), 0, 0, 0],//drone > trap
        },
        {
            POSITION: [ii * 1.5, 7, 1, 0, 0, 0, 0],//new trap barrrel
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
Class.battery10 = {
    PARENT: "genericTank",
    LABEL: "Battery",
    DANGER: 6,
    ON_ALT: (body) => animate(body, "battery", 10, true, 50),
    GUNS: [
        {
            POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        },
        {
            POSITION: [14, 4, 1, 0, 0, 0, 0],
            PROPERTIES: {
                COLOR: `#FF0000`
            }
        },
    ]
}
