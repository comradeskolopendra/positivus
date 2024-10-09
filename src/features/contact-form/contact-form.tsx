import { DeviceTrackingState, HomeState } from "@/entities";
import type { IContactForm } from "@/shared/types/util-types";
import { Button, Input, Radio } from "@/shared/ui";
import { observer } from "mobx-react";
import { FormEvent, useState } from "react";
import styles from "./contact-form.module.scss";

const ContactForm = observer(() => {
    const { sendEmailData } = HomeState;
    const { isMobile } = DeviceTrackingState;
    const [formData, setFormData] = useState<IContactForm>({
        name: "",
        email: "",
        message: "",
        typeOfContact: "Say Hi"
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendEmailData(formData);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <section className={styles.items}>
                <section className={styles.checkboxes}>
                    <Radio
                        name={"typeOfContact"}
                        label="Say Hi"
                        defaultChecked
                        setValue={setFormData}
                    />
                    <Radio
                        name={"typeOfContact"}
                        label="Get a Quote"
                        setValue={setFormData}
                    />
                </section>

                <section className={styles.inputs}>
                    <Input
                        label="Name"
                        setValue={setFormData}
                        value={formData.name}
                        size="m"
                        placeholder="Name"
                    />
                    <Input
                        label="Email"
                        setValue={setFormData}
                        value={formData.email}
                        required
                        size="m"
                        placeholder="Email"
                    />
                    <Input
                        label="Message"
                        setValue={setFormData}
                        value={formData.message}
                        required
                        size="l"
                        placeholder="Message"
                    />
                </section>


                {!isMobile &&
                    <Button
                        type="submit"
                        variant="dark"
                        className={styles.button}
                    >
                        Send Message
                    </Button>
                }
            </section>
            {isMobile &&
                <Button
                    type="submit"
                    variant="dark"
                    className={styles.button}
                >
                    Send Message
                </Button>
            }

            <svg className={styles.svg} width="692" height="649" viewBox="0 0 692 649" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_341_618" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="41" y="0" width="651" height="649">
                    <mask id="path-1-outside-1_341_618" maskUnits="userSpaceOnUse" x="40.7109" y="-0.5" width="651" height="650" fill="black">
                        <rect fill="white" x="40.7109" y="-0.5" width="651" height="650" />
                        <path d="M366.641 162.061L387.068 0.5L386.909 163.337L427.445 5.60362L407.017 167.165L467.024 15.6514L426.488 173.545L505.007 30.6432L444.841 182.157L540.756 50.2603L462.077 193.162L573.632 74.343L477.876 206.08L603.475 102.253L491.761 220.913L629.489 133.673L503.73 237.499L651.353 168.122L513.625 255.362L668.749 204.964L521.126 274.341L681.356 243.719L526.233 294.118L689.017 283.751L528.786 314.213L691.57 324.42L528.786 334.628L689.017 365.09L526.233 354.883L681.356 405.121L521.126 374.659L668.749 444.036L513.625 393.638L651.353 480.878L503.73 411.501L629.489 515.328L491.761 427.928L603.475 546.747L477.876 442.76L573.632 574.657L462.077 455.838L540.756 598.58L444.841 466.684L505.007 618.197L426.488 475.455L467.024 633.189L407.017 481.676L427.445 643.396L386.909 485.503L387.068 648.5L366.641 486.779L346.213 648.5L346.213 485.503L305.676 643.396L326.264 481.676L266.257 633.189L306.794 475.455L228.274 618.197L288.44 466.684L192.526 598.58L271.205 455.838L159.49 574.657L255.405 442.76L129.806 546.747L241.52 427.928L103.792 515.328L229.551 411.501L81.9282 480.878L219.656 393.638L64.5326 444.036L212.155 374.659L51.9248 405.121L207.048 354.883L44.2644 365.09L204.495 334.628L41.7109 324.42L204.495 314.213L44.2644 283.751L207.048 294.118L51.9248 243.719L212.155 274.341L64.5326 204.964L219.656 255.362L81.9282 168.122L229.551 237.499L103.792 133.673L241.52 220.913L129.806 102.253L255.405 206.08L159.49 74.343L271.205 193.162L192.526 50.2603L288.44 182.157L228.274 30.6432L306.794 173.545L266.257 15.6514L326.264 167.165L305.676 5.60362L346.213 163.337V0.5L366.641 162.061Z" />
                    </mask>
                    <path d="M366.641 162.061L387.068 0.5L386.909 163.337L427.445 5.60362L407.017 167.165L467.024 15.6514L426.488 173.545L505.007 30.6432L444.841 182.157L540.756 50.2603L462.077 193.162L573.632 74.343L477.876 206.08L603.475 102.253L491.761 220.913L629.489 133.673L503.73 237.499L651.353 168.122L513.625 255.362L668.749 204.964L521.126 274.341L681.356 243.719L526.233 294.118L689.017 283.751L528.786 314.213L691.57 324.42L528.786 334.628L689.017 365.09L526.233 354.883L681.356 405.121L521.126 374.659L668.749 444.036L513.625 393.638L651.353 480.878L503.73 411.501L629.489 515.328L491.761 427.928L603.475 546.747L477.876 442.76L573.632 574.657L462.077 455.838L540.756 598.58L444.841 466.684L505.007 618.197L426.488 475.455L467.024 633.189L407.017 481.676L427.445 643.396L386.909 485.503L387.068 648.5L366.641 486.779L346.213 648.5L346.213 485.503L305.676 643.396L326.264 481.676L266.257 633.189L306.794 475.455L228.274 618.197L288.44 466.684L192.526 598.58L271.205 455.838L159.49 574.657L255.405 442.76L129.806 546.747L241.52 427.928L103.792 515.328L229.551 411.501L81.9282 480.878L219.656 393.638L64.5326 444.036L212.155 374.659L51.9248 405.121L207.048 354.883L44.2644 365.09L204.495 334.628L41.7109 324.42L204.495 314.213L44.2644 283.751L207.048 294.118L51.9248 243.719L212.155 274.341L64.5326 204.964L219.656 255.362L81.9282 168.122L229.551 237.499L103.792 133.673L241.52 220.913L129.806 102.253L255.405 206.08L159.49 74.343L271.205 193.162L192.526 50.2603L288.44 182.157L228.274 30.6432L306.794 173.545L266.257 15.6514L326.264 167.165L305.676 5.60362L346.213 163.337V0.5L366.641 162.061Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" mask="url(#path-1-outside-1_341_618)" />
                </mask>
                <g mask="url(#mask0_341_618)">
                    <rect x="-785.721" y="-37.6172" width="1152.83" height="702.852" rx="45" fill="black" />
                </g>
                <path d="M95.7147 470.596L141.422 495.5L95.7147 520.604L70.7109 566.21L45.7072 520.604L0.000260592 495.5L45.7072 470.596L70.7109 424.789L95.7147 470.596Z" fill="#B9FF66" />
                <path d="M217.102 244.065L298.777 288.566L217.102 333.425L172.422 414.922L127.742 333.425L46.0666 288.566L127.742 244.065L172.422 162.211L217.102 244.065Z" fill="#191A23" />
            </svg>
        </form>
    )
});

export default ContactForm;