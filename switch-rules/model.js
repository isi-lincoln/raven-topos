let toponame = "firewall_"+Math.random().toString().substr(-6);

function server(name) {
	return {
		name: name,
		image: 'debian-buster',
		cpu: { cores: 2 },
		memory: { capacity: GB(4) },
	};
}

function vertex(name) {
  return {
    name: name,
    image: 'cumulusvx-3.7-mvrf',
    cpu: { cores: 2 },
    memory: { capacity: GB(2) },
  };
}

//      s2 - c
//   s1    s3
// a   b     d
topo = {
	name: toponame,
	nodes: [
		server("a"),
		server("b"),
		server("c"),
		server("d"),
	],
	switches: [
		vertex("s1"),
		vertex("s2"),
		vertex("s3"),
	],
	links: [
		Link('s1', 1, 's2', 1),
		Link('s3', 1, 's2', 2),
		Link('a', 1, 's1', 2),
		Link('b', 1, 's1', 3),
		Link('c', 1, 's2', 3),
		Link('d', 1, 's3', 2),
	],
}
