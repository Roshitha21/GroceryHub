package com.ts1.dao;

import java.util.List;

import org.hibernate.SessionFactory;

import com.rest1.dto.Customer;
import com.rest1.dto.Orders;
import com.rest1.dto.Products;
import com.rest1.dto.Review;
import com.ts1.db.HibernateTemplate;

public class AdminDAO {
	private SessionFactory factory = null;
	
	public int addProductByAdmin(Products product) {
		return HibernateTemplate.addObject(product);
	}

    public Products getProductAddedByAdmin(int productId) {
    	return (Products) HibernateTemplate.getObjectById(productId);
    }
  /*  public int deleteProductAddedByAdmin(String productName) {
		System.out.println(HibernateTemplate.getObjectById(productName));
		Products b = (Products) HibernateTemplate.getObjectById(productName);
		return HibernateTemplate.deleteProductAddedByCustomer(b);
	}*/
	
    public int deleteProductAddedByAdmin(int productId) {
    	return HibernateTemplate.deleteObject(Products.class, productId);
    }
    public List<Products> viewAllProducts() {
    	List<Products> list = HibernateTemplate.getObjectListByQuery();
    	System.out.println(list);
    	return list;
    	/*Configuration config = new Configuration();
		config.configure("hibernate.cfg.xml");
		SessionFactory factory = config.buildSessionFactory();
		Session session = factory.openSession();
		Query q1 = session.createQuery("from Products");
		List<Products> productList = q1.list();
		//session.close();
		return productList;*/

   
    }
    public List<Customer> viewAllCustomers() {
    	return HibernateTemplate.getCustomerListByQuery();
    }
    public List<Review> viewAllReviews() {
    	return HibernateTemplate.getReviewListByQuery();
    }
    public List<Orders> viewAllOrders() {
    	return HibernateTemplate.getOrderListByQuery();
    }
    
    public void deliverOrder(int orderId) {
    	Orders order = new Orders();
    	order = (Orders) HibernateTemplate.getOrderById(orderId);
    	
    }
}
	

