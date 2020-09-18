package com.rest1;

import java.awt.print.Book;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import com.rest1.dto.Address;
import com.rest1.dto.Products;
import com.rest1.dto.Customer;

import com.ts1.dao.ProductsDAO;
import com.ts1.dao.CustomerDAO;

public class MyResource2 {
	@Path("regCustomer")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
    public String regCustomer(Customer customer) {
		CustomerDAO custDao = new CustomerDAO();
		custDao.register(customer);
    	return "Registration Successful...";
    }
	
	@Path("updateCustomer")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public String updateCustomer(Customer customer) {
		CustomerDAO cusDao = new CustomerDAO();
		cusDao.updateCustomer(customer);
		return "updated successful...";
	}

	@Path("sellProduct")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public String sellProduct(Products product) {
		ProductsDAO productsDao = new ProductsDAO();
		productsDao.sellProduct(product);
		return "Success";
		
	}
	
	@Path("deleteProductAddedByCustomer/{productId}")
	@DELETE
	@Produces(MediaType.APPLICATION_JSON)
	public void deleteProductaddedByCustomer(@PathParam("productId") int productId){
		CustomerDAO custDao = new CustomerDAO();
		
		//custDao.deleteProductaddedByCustomer(productId);
		
	}	
	
	@Path("placeOrder/{productId}/{custId}")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public void placeOrder(@PathParam("productId") int productId, @PathParam("loginId") String loginId){
		CustomerDAO custDao = new CustomerDAO();
		Customer c = new Customer();
		Book book = new Book();
		
		//Order order = new Order();
		//order.se
		//custDao.buyProduct(productId, custId);
		
	}	
	
}
