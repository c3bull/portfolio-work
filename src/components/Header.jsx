import me from "../assets/me.png";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {useCallback} from "react";
export default function Header() {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: { enable: false },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                // enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 10,
                            },
                            repulse: {
                                distance: 50,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#FFFFFF",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 2500,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className='bg-primary w-full h-screen flex items-center justify-center'>
                <div className='lg:w-3/4'>
                    <div className='flex items-center justify-around'>
                        <p className='text-white font-bold text-5xl'>Junior Frontend Developer</p>
                        <img
                            src={me}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}