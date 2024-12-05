// function to automatically create html element
// params : elem type (name of the tage), elem 
// attributes name, attributes values, both as a
// list, then data inside the tag. returns the a
// positive integer for the number of attributes 
// added or -1 if it fails, so we can easily check
// if all the rifht attributes have been added.

class tagHTML {
	constructor(name, attributes, attributes_values, data) {
		this.name = name;
		this.attributes = attributes;
		this.attributes_values = attributes_values;
		this.data = data;
	}
}

function createElemHTML(name, attributes, attributes_values, data, parent) {
	const tag = new tagHTML(name, attributes, attributes_values, data);
	let new_elem = document.createElement(tag.name);
	if (!new_elem)
		return (-1);
	let number_of_attributes = 0;
	while (tag.attributes[number_of_attributes++])
		new_elem.setAttribute(tag.attributes[number_of_attributes], tag.attributes_values[number_of_attributes]);
	let parentTag = document.querySelectorAll(parent);
	if (parentTag.length > 0)
		parentTag[0].append(new_elem);
	else
		document.body.append(new_elem);
	if (data)
		new_elem.innerHTML = data;
	return (number_of_attributes);
}

// USAGE :
// createElemHTML("p", ["id", "class"], ["this is my id", "this is my class"], "i am a paragraph", ".myDiv"));
