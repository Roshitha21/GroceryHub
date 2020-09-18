package com.ts1.dao;

import org.hibernate.SessionFactory;

import com.rest1.dto.Review;
import com.ts1.db.HibernateTemplate;

public class ReviewDAO {
	private SessionFactory factory = null;
	public int review(Review review) {
		System.out.println("hiii....");
		//java.util.Date utilDate = new java.sql.Date(product.getPublishedDate().getTime()); 
		return HibernateTemplate.addObject(review);
	}
//	public static Review getProduct(int custId, String review) {
//		return (Review) HibernateTemplate.getObjectById(custId, review);
//	}
//	

}
