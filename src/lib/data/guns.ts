import { GUN_TYPE, type Gun } from "./types"

function permaScopeNote(): string {
	return `The scope is built-in and cannot be removed`
}

function smgVsMpNote(): string {
	return `Classified as Machine pistol on Ubisoft's site, but as Submachine pistol here`
}

function dmrVsArNote(): string {
	return (
		`Classified as Assault rifle on Ubisoft's site, but as Marksman rifle here because ` +
		`it doesn't have full-auto fire rate`
	)
}

export const guns: { [name: string]: Gun } = {
	uzk50gi: { name: "UZK50Gi", type: GUN_TYPE.smg },
	bailiff: { name: "Bailiff 410", type: GUN_TYPE.bailiff, note: permaScopeNote() },
	sc3000k: { name: "SC3000K", type: GUN_TYPE.rifle },
	csrx300: { name: "CSRX 300", type: GUN_TYPE.dmr },
	pof9: { name: "POF-9", type: GUN_TYPE.rifle },
	shield: { name: "Ballistic shield", type: GUN_TYPE.shield },
	l85a2: { name: "L85A2", type: GUN_TYPE.rifle },
	ar33: { name: "AR33", type: GUN_TYPE.rifle },
	g36c: { name: "G36C", type: GUN_TYPE.rifle },
	r4c: { name: "R4-C", type: GUN_TYPE.rifle },
	_556xi: { name: "556XI", type: GUN_TYPE.rifle },
	f2: { name: "F2", type: GUN_TYPE.rifle },
	ak12: { name: "AK-12", type: GUN_TYPE.rifle },
	auga2: { name: "AUG A2", type: GUN_TYPE.rifle },
	_552commando: { name: "552 Commando", type: GUN_TYPE.rifle },
	_416ccarbine: { name: "416-C Carbine", type: GUN_TYPE.rifle },
	c8sfw: { name: "C8-SFW", type: GUN_TYPE.rifle },
	mk17cqb: { name: "MK17 CQB", type: GUN_TYPE.rifle },
	para308: { name: "Para-308", type: GUN_TYPE.rifle },
	type89: { name: "Type-89", type: GUN_TYPE.rifle },
	c7e: { name: "C7E", type: GUN_TYPE.rifle },
	m762: { name: "M762", type: GUN_TYPE.rifle },
	spear308: { name: "Spear .308", type: GUN_TYPE.rifle },
	v308: { name: "V308", type: GUN_TYPE.rifle },
	ar1550: { name: "AR-15.50", type: GUN_TYPE.dmr, importantNote: dmrVsArNote() },
	m4: { name: "M4", type: GUN_TYPE.rifle },
	ak74m: { name: "AK-74M", type: GUN_TYPE.rifle },
	arx200: { name: "ARX200", type: GUN_TYPE.rifle },
	f90: { name: "F90", type: GUN_TYPE.rifle },
	commando9: { name: "Commando 9", type: GUN_TYPE.rifle },
	p226mk25: { name: "P226 MK 25", type: GUN_TYPE.pistol },
	m45meusoc: { name: "M45 MEUSOC", type: GUN_TYPE.pistol },
	_57usg: { name: "5.7 USG", type: GUN_TYPE.pistol },
	p9: { name: "P9", type: GUN_TYPE.pistol },
	lfp586: { name: "LFP586", type: GUN_TYPE.pistol },
	pmm: { name: "PMM", type: GUN_TYPE.pistol },
	gsh18: { name: "GSH-18", type: GUN_TYPE.pistol },
	p12: { name: "P12", type: GUN_TYPE.pistol },
	mmk19mm: { name: "MMK19mm", type: GUN_TYPE.pistol },
	d50: { name: "D-50", type: GUN_TYPE.pistol },
	prb92: { name: "PRB92", type: GUN_TYPE.pistol },
	luison: { name: "Luison", type: GUN_TYPE.pistol },
	p229: { name: "P229", type: GUN_TYPE.pistol },
	usp40: { name: "USP40", type: GUN_TYPE.pistol },
	q929: { name: "Q-929", type: GUN_TYPE.pistol },
	rg15: { name: "RG15", type: GUN_TYPE.pistol, note: permaScopeNote() },
	keratos357: { name: "KERATOS.357", type: GUN_TYPE.pistol },
	p10c: { name: "P-10C", type: GUN_TYPE.pistol, note: permaScopeNote() },
	_1911tacops: { name: "1911 TACOPS", type: GUN_TYPE.pistol },
	_44magsemiauto: { name: ".44 Mag Semi-Auto", type: GUN_TYPE.pistol, note: permaScopeNote() },
	sdp9mm: { name: "SDP 9mm", type: GUN_TYPE.pistol },
	_6p41: { name: "6P41", type: GUN_TYPE.lmg },
	g8a1: { name: "G8A1", type: GUN_TYPE.lmg },
	m249: { name: "M249", type: GUN_TYPE.lmg },
	t95lsw: { name: "T-95 LSW", type: GUN_TYPE.lmg },
	lmge: { name: "LMG-E", type: GUN_TYPE.lmg },
	dp27: { name: "DP27", type: GUN_TYPE.lmg },
	alda556: { name: "ALDA 5.56", type: GUN_TYPE.lmg },
	m249saw: { name: "M249 SAW", type: GUN_TYPE.lmg },
	smg11: { name: "SMG-11", type: GUN_TYPE.smg, importantNote: smgVsMpNote() },
	bearing9: { name: "BEARING 9", type: GUN_TYPE.mpistol },
	c75auto: { name: "C75 Auto", type: GUN_TYPE.mpistol },
	smg12: { name: "SMG-12", type: GUN_TYPE.smg, importantNote: smgVsMpNote() },
	spsmg9: { name: "SPSMG9", type: GUN_TYPE.mpistol },
	_417: { name: "417", type: GUN_TYPE.dmr },
	ots03: { name: "Ots-03", type: GUN_TYPE.dmr },
	camrs: { name: "CAMRS", type: GUN_TYPE.dmr },
	sr25: { name: "SR-25", type: GUN_TYPE.dmr },
	mk14ebr: { name: "Mk 14 EBR", type: GUN_TYPE.dmr },
	m590a1: { name: "M590A1", type: GUN_TYPE.shotgun },
	m1014: { name: "M1014", type: GUN_TYPE.shotgun },
	sgcqb: { name: "SG-CQB", type: GUN_TYPE.shotgun },
	sasg12: { name: "SASG-12", type: GUN_TYPE.shotgun },
	m870: { name: "M870", type: GUN_TYPE.shotgun },
	super90: { name: "Super 90", type: GUN_TYPE.shotgun },
	spas12: { name: "SPAS-12", type: GUN_TYPE.shotgun },
	spas15: { name: "SPAS-15", type: GUN_TYPE.shotgun },
	supernova: { name: "Supernova", type: GUN_TYPE.shotgun },
	ita12l: { name: "ITA12L", type: GUN_TYPE.shotgun },
	six12sd: { name: "SIX12 SD", type: GUN_TYPE.shotgun },
	six12: { name: "SIX12", type: GUN_TYPE.shotgun },
	fo12: { name: "FO-12", type: GUN_TYPE.shotgun },
	bosg122: { name: "BOSG.12.2", type: GUN_TYPE.shotgun },
	acs12: { name: "ACS12", type: GUN_TYPE.shotgun },
	tcsg12: { name: "TCSG12", type: GUN_TYPE.shotgun },
	ita12s: { name: "ITA12S", type: GUN_TYPE.shotgun },
	supershorty: { name: "Super Shorty", type: GUN_TYPE.shotgun },
	mp5k: { name: "MP5K", type: GUN_TYPE.smg },
	fmg9: { name: "FMG-9", type: GUN_TYPE.smg },
	ump45: { name: "UMP45", type: GUN_TYPE.smg },
	mp5: { name: "MP5", type: GUN_TYPE.smg },
	p90: { name: "P90", type: GUN_TYPE.smg },
	_9x19vsn: { name: "9x19VSN", type: GUN_TYPE.smg },
	mp7: { name: "MP7", type: GUN_TYPE.smg },
	_9mmc1: { name: "9mm C1", type: GUN_TYPE.smg },
	mpx: { name: "MPX", type: GUN_TYPE.smg },
	m12: { name: "M12", type: GUN_TYPE.smg },
	mp5sd: { name: "MP5SD", type: GUN_TYPE.smg },
	pdw9: { name: "PDW9", type: GUN_TYPE.smg },
	vector45acp: { name: "Vector .45 ACP", type: GUN_TYPE.smg },
	t5smg: { name: "T-5 SMG", type: GUN_TYPE.smg },
	scorpionevo3a1: { name: "Scorpion EVO3 A1", type: GUN_TYPE.smg },
	k1a: { name: "K1A", type: GUN_TYPE.smg },
	mx4storm: { name: "Mx4 Storm", type: GUN_TYPE.smg },
	auga3: { name: "AUG A3", type: GUN_TYPE.smg },
	p10roni: { name: "P10 Roni", type: GUN_TYPE.smg },
	gonne6: { name: "Gonne-6", type: GUN_TYPE.gonne6 },
}
