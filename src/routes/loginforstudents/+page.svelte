<script>
    import { goto } from "$app/navigation";
    import { fade, fly } from "svelte/transition";
    import { onMount } from "svelte";
    
    let name = "";
    let phone = "";
    let email = "";
    let password = "";
    let otp = "";
    let captchaInput = "";
    let step = "signup";
    let captcha = Math.floor(1000 + Math.random() * 9000).toString();
    let isChecked = false;

    function handleSignup() {
        if (name === "123" && phone === "123" && email === "123@gmail.com" && password === "123" && captchaInput === captcha) {
            step = "otp";
        } else {
            alert("Invalid details or captcha!");
        }
    }

    function verifyOTP() {
        if (otp === "123") {
            step = "nda";
        } else {
            alert("Invalid OTP!");
        }
    }

    function agreeAndProceed() {
        if (!isChecked) {
            alert("Please agree to the terms before proceeding.");
            return;
        }
        goto("/studentsdashboard");
    }
</script>

<style>
    .container {
        max-width: 400px;
        margin-top: 40px;
        margin-bottom: 40px;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
        color: white;
        text-align: center;
        transition: transform 0.3s ease-in-out;
    }
    .container:hover {
        transform: scale(1.05);
    }
    input, button {
        width: 100%;
        padding: 12px;
        margin-top: 10px;
        border-radius: 8px;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
    }
    .captcha {
        font-size: 1.5rem;
        font-weight: bold;
        background: rgba(255, 255, 255, 0.3);
        padding: 10px;
        border-radius: 8px;
        margin: 10px 0;
    }
</style>

{#if step === "signup"}
    <div class="container" transition:fly={{ y: 20, duration: 500 }}>
        <h2>Sign Up</h2>
        <input type="text" bind:value={name} placeholder="Name" />
        <input type="text" bind:value={phone} placeholder="Phone" />
        <input type="email" bind:value={email} placeholder="Email" />
        <input type="password" bind:value={password} placeholder="Password" />
        <div class="captcha">{captcha}</div>
        <input type="text" bind:value={captchaInput} placeholder="Enter Captcha" />
        <button on:click={handleSignup}>Sign Up</button>
    </div>
{:else if step === "otp"}
    <div class="container" transition:fade>
        <h2>Enter OTP</h2>
        <input type="text" bind:value={otp} placeholder="Enter OTP" />
        <button on:click={verifyOTP}>Verify OTP</button>
    </div>
{:else if step === "nda"}
    <div class="container" transition:fade>
        <h2>Non-Disclosure Agreement</h2>
        <p>This NDA ensures the confidentiality of the shared information. Please read and agree below.</p>
        <label>
            <input type="checkbox" bind:checked={isChecked} /> I agree to the NDA terms
        </label>
        <button on:click={agreeAndProceed}>I Agree</button>
    </div>
{/if}