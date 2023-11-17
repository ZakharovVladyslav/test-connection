"use client";

import { useEffect, useState } from "react";

export default function Home() {
    const [members, setMembers] = useState<Member>();
    const [counters, setCounters] = useState<Counter[]>();

    const handleAddCounter = async () => {
        try {
            const res = await fetch("/api/members", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({}),
            });
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        try {
            (async () => {
                const fetchedMembers = await fetch("/api/members");
                const fetchedCounters = await fetch("/api/counters");
                const membersJSON: Member = await fetchedMembers.json();
                const countersJSON: Counter[] = await fetchedCounters.json();

                setMembers(membersJSON);
                setCounters(countersJSON);
            })();
        } catch (e) {
            console.error(e);
        }
    }, []);

    return (
        <>
            <p>email: {members?.data.email}</p>
            <p>id: {members?.id}</p>

            {counters?.map((counter) => (
                <p key={counter.key}>
                    counter key: {counter.key} <br /> counter value:{" "}
                    {counter.value}
                </p>
            ))}

            <button onClick={handleAddCounter}>Increase rate july</button>
        </>
    );
}
