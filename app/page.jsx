import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getData(){

	const response = await fetch("http://cms.zanda.info/items/Products", {
		method: "GET",
		headers:{
			'Content-Type' : 'application/json',
			Authorization: "Bearer FjrjCaTkJoef_3OXIXS9lnifOcqteWZy"
		},
		body: JSON.stringify(),
	})
	
	const data = await response.json();
	return data;
}

export default async function Home(){
	const products = await getData();
	const productsArray = products.data
	console.log(productsArray)
	return(
		<ul>
			{
				productsArray.map((product)=>(
					<li key={product.id}>
						{product.Name}
						
					</li>
					
				))
			}
			
		</ul>
	)
}