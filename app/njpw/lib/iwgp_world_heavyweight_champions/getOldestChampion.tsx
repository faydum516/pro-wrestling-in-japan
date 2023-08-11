export default async function getOldestChampion() {
    const res = await fetch('https://pro-wrestling-in-japan-backend.onrender.com/iwgp_world_heavyweight_champions/oldest_champion', { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
}