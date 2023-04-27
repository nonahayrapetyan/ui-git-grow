import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import { SmileOutlined } from '@ant-design/icons';
import { Button } from './index';

describe('Button test', () => {
  afterEach(cleanup);
  const btnText = 'ButtonText';

  it('button should be rendered correctly', () => {
    render(<Button>{btnText}</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeVisible();
    expect(buttonElement).toHaveTextContent(btnText);
  });

  it('button should be disabled if it has disabled prop', () => {
    render(<Button disabled />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });

  it('calls the onClick function', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('button should  have loading icon if it has loading prop', () => {
    render(<Button loading />);
    const loadingIcon = screen.getByRole('img');
    expect(loadingIcon).toBeVisible();
  });

  it('button should  have icon if it has icon prop', () => {
    render(<Button icon={<SmileOutlined />} />);
    const iconElement = screen.getByRole('img');
    expect(iconElement).toBeVisible();
  });

  it('button should  have loading icon instead of icon  if it has loading true state', () => {
    render(<Button icon={<SmileOutlined />} loading />);
    const icons = screen.getAllByRole('img');
    expect(icons).toHaveLength(1);
    expect(icons[0]).toHaveAttribute('aria-label', 'loading');
  });
});
