<script>
    let pathLength;
</script>

<style>
    .background {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-image: url('/assets/images/background.png');
        background-size: cover;
        background-position: center;
        z-index: -1;
    }

    svg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 0;
    }

    /*circle {*/
    /*    fill: white;*/
    /*    r: 6;*/
    /*}*/
</style>

<div class="background"></div>

<svg viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
        <path id="edgePath" d="M0,0 L100,0 L100,100 L0,100 Z" />
    </defs>

    <circle>
        <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
            <mpath href="#edgePath" />
        </animateMotion>
    </circle>
</svg>
