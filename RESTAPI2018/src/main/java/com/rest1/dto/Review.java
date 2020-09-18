package com.rest1.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Review {
	@Id@GeneratedValue
	private int reviewId;
	private String review;



	public int getReviewId() {
		return reviewId;
	}



	public void setReviewId(int reviewId) {
		this.reviewId = reviewId;
	}



	public String getReview() {
		return review;
	}



	public void setReview(String review) {
		this.review = review;
	}





	public Review(int reviewId, String review) {
		super();
		this.reviewId = reviewId;
		this.review = review;
	}



	public Review() {
		super();
		// TODO Auto-generated constructor stub
	}



	@Override
	public String toString() {
		return "Review [reviewId=" + reviewId + ", review=" + review + "]";
	}
	
	
	
}
