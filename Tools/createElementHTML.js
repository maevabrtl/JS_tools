// function to automatically create html element
// params : elem type (name of the tage), elem 
// attributes name, attributes values, both as a
// list, then data inside the tag. returns the a
// positive integer for the number of attributes 
// added or -1 if it fails, so we can easily check
// if all the rifht attributes have been added.

class tagHTML {
	constructor(name, attributes, attributesValues, data) {
		this.name = name;
		this.attributes = attributes;
		this.attributesValues = attributesValues;
		this.data = data;
	}
}

function createElemHTML(name, attributes, attributesValues, data, parent) {
	const tag = new tagHTML(name, attributes, attributesValues, data);
	let newElem = document.createElement(tag.name);
	if (!newElem)
		return (-1);
	let numberOfAttributes = 0;
	while (tag.attributes[numberOfAttributes++])
		newElem.setAttribute(tag.attributes[numberOfAttributes], tag.attributesValues[numberOfAttributes]);
	let parentTag = document.querySelectorAll(parent);
	if (parentTag.length > 0)
		parentTag[0].append(newElem);
	else
		document.body.append(newElem);
	if (data)
		newElem.innerHTML = data;
	return (numberOfAttributes);
}

// USAGE :
// createElemHTML("p", ["id", "class"], ["this is my id", "this is my class"], "i am a paragraph", ".myDiv"));
