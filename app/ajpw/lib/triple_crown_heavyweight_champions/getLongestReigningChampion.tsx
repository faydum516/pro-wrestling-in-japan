export default async function getLongestReigningChampion() {
    const res = await fetch('https://pro-wrestling-in-japan-backend.onrender.com/triple_crown_heavyweight_champions/longest_reigning_champion', { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
}